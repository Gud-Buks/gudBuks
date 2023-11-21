import { Router } from "express";
import { getComments } from "./getComments";

const router = Router();

router.get("/", async (req, res) => {
  const bookId = req.query.bookId as string;
  if (!bookId) res.status(400).send("missing bookId query param");
  const comments = await getComments(bookId);
  return res.json(comments);
});

export const commentRouter = router;
