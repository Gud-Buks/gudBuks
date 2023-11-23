import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import { db } from "../db";
import { JWT_SECRET } from "../env";
import { getPayload } from "./getPayload";

type SignInResult = {
  user: User;
  token: string;
};

export async function signIn(idToken: string): Promise<SignInResult> {
  const payload = await getPayload(idToken);
  const { email } = payload;

  let user = await db.user.findUnique({ where: { email } });

  if (!user) {
    const { name, picture } = payload;
    user = await db.user.create({ data: { email, name, picture } });
  }

  const token = jwt.sign(user.id, JWT_SECRET, { algorithm: "HS256" });

  return { user, token };
}
