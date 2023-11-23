import { User } from "@prisma/client";
import { OAuth2Client } from "google-auth-library";
import { db } from "../db";
import { getPayload } from "./getPayload";
const client = new OAuth2Client();

export async function signIn(idToken: string): Promise<User> {
  const { email, name } = await getPayload(idToken);
  const user = await db.user.create({ data: { email, name } });
  return user;
}
