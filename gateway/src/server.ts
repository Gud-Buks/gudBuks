import express from "express";
import "express-async-errors";
import { Book } from "./book";
import { BooksVolumes } from "./booksVolumes";
import { errorMiddleware } from "./errorMiddleware";

const app = express();
const port = 8585;

app.use("/books", async (req, res) => {
  const q = req.query.q as string;
  if (!q) res.status(400).send("missing bookId query param");
  const booksRes = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=" + q
  );
  const booksData: BooksVolumes = await booksRes.json();
  const books: Book[] = booksData.items.map((data) => {
    console.log(data.volumeInfo.imageLinks);
    return {
      id: data.id,
      author: data.volumeInfo.authors,
      cover: data.volumeInfo.imageLinks?.thumbnail,
      releaseDate: data.volumeInfo.publishedDate,
      synopsis: data.volumeInfo.description,
      title: data.volumeInfo.title,
    };
  });
  console.log(books);
  return res.json(books);
});

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});