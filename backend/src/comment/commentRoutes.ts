import { Router } from "express";
import { createComment } from "./createComment";
import { getComment } from "./getComment";
import { getComments } from "./getComments";
import { AuthRequest } from "../auth/authRequest";

const router = Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const comment = await getComment(id);
  return res.json(comment);
});

router.get("/", async (req, res) => {
  const bookId = req.query.bookId as string;
  if (!bookId) res.status(400).send("Missing bookId query param");
  const comments = await getComments(bookId);
  return res.json(comments);
});

router.post("/", async (req: AuthRequest, res) => {
  const { bookId, text } = req.body;
  if (!bookId) res.status(400).send("Missing bookId on request body");
  if (!text) res.status(400).send("Missing text on request body");

  const userId = req.auth;

  const comment = await createComment({ bookId, text, userId });
  return res.json(comment);
});

export const commentRouter = router;
