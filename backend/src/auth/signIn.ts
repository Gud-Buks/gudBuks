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
  const { email, name } = await getPayload(idToken);

  let user = await db.user.findUnique({ where: { email } });

  if (!user) {
    user = await db.user.create({ data: { email, name } });
  }

  const token = jwt.sign(user.id, JWT_SECRET);

  return { user, token };
}
