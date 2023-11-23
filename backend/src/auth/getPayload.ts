import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client();

export async function getPayload(idToken: string) {
  const clientId =
    "764935952135-pq9vunhl6j03lams42b2rroh4babii7r.apps.googleusercontent.com";
  const ticket = await client.verifyIdToken({ idToken, audience: clientId });
  const payload = ticket.getPayload();
  return payload;
}
