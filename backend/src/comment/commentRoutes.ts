// commentRoutes.ts

import { Router } from "express";
import { AuthRequest } from "../auth/authRequest";
import { jwtMiddleware } from "../jwtMiddleware";
import { createComment } from "./createComment";
import { deleteComment } from "./deleteComment";
import { getComment } from "./getComment";
import { getComments } from "./getComments";

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

router.post("/", jwtMiddleware, async (req: AuthRequest, res) => {
  const { bookId, text } = req.body;
  if (!bookId) res.status(400).send("Missing bookId on request body");
  if (!text) res.status(400).send("Missing text on request body");

  const userId = req.auth;

  const comment = await createComment({ bookId, text, userId });
  return res.json(comment);
});

router.delete("/:id", jwtMiddleware, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;
    const userId = req.auth;

    const result = await deleteComment({
      commentId: id,
      userId,
    });

    if (result) {
      res.status(200).json({ message: "Comentário excluído com sucesso" });
    } else {
      res.status(404).json({ message: "Comentário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export const commentRouter = router;
