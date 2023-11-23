import { Router } from "express";
import { AuthRequest } from "../auth/authRequest";
import { getUser } from "./getUser";

const router = Router();
export const userRouter = router;

router.get("/me", async (req: AuthRequest, res) => {
  const userId = req.auth;
  const user = await getUser(userId);
  return res.json(user);
});
