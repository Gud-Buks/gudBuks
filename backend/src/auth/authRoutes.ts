import { Router } from "express";
import { signIn } from "./signIn";

const router = Router();

router.post("/sign-in", async (req, res) => {
  const { credential } = req.body;
  const result = await signIn(credential);
  return res.json(result);
});

export const authRouter = router;
