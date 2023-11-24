import { Router } from "express";
import { AuthRequest } from "../auth/authRequest";
import { getUser } from "./getUser";
import { jwtMiddleware } from "../jwtMiddleware";

const router = Router();
export const userRouter = router;

router.get("/me", jwtMiddleware, async (req: AuthRequest, res) => {
  const userId = req.auth;
  const user = await getUser(userId);
  return res.json(user);
});
