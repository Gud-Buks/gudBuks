import { User } from "@prisma/client";
import { OAuth2Client } from "google-auth-library";
import { getPayload } from "./getPayload";
const client = new OAuth2Client();

export async function signIn(idToken: string): User {
  const payload = await getPayload(idToken);
  console.log(payload);
  return {};
}
