import cors from "cors";
import express from "express";
import "express-async-errors";
import proxy from "express-http-proxy";
import { Book } from "./book";
import { BooksVolume, BooksVolumes } from "./booksVolumes";
import { errorMiddleware } from "./errorMiddleware";

const app = express();
const port = 8585;

app.use(cors());

app.use("/books/:id", async (req, res) => {
  const id = req.params.id;

  const booksRes = await fetch(
    "https://www.googleapis.com/books/v1/volumes/" + id
  );
  const data: BooksVolume = await booksRes.json();
  const book: Book = {
    id: data.id,
    title: data.volumeInfo.title,
    authors: data.volumeInfo.authors,
    description: data.volumeInfo.description,
    cover: data.volumeInfo.imageLinks?.thumbnail,
    publishedDate: data.volumeInfo.publishedDate,
  };
  return res.json(book);
});

app.use("/books", async (req, res) => {
  const q = req.query.q as string;
  if (!q) res.status(400).send("missing bookId query param");
  const booksRes = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=" + q
  );
  const booksData: BooksVolumes = await booksRes.json();
  const books: Book[] = booksData.items.map((data) => {
    return {
      id: data.id,
      title: data.volumeInfo.title,
      authors: data.volumeInfo.authors,
      description: data.volumeInfo.description,
      cover: data.volumeInfo.imageLinks?.thumbnail,
      publishedDate: data.volumeInfo.publishedDate,
    };
  });
  return res.json(books);
});

app.use("/", proxy("http://localhost:8080"));

app.use(errorMiddleware);

app.listen(port, () => {
  console.info(`Example app listening on port ${port}`);
});
