import { Router } from "express";
import { Book } from "./book";
import { BooksVolume, BooksVolumes } from "./booksVolumes";

const router = Router();
export const bookRoutes = router;

router.get("/:id", async (req, res) => {
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

router.get("/", async (req, res) => {
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
