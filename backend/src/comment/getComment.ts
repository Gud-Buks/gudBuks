import { db } from "../db";

export async function getComment(id: string) {
  return db.comment.findUnique({
    where: { id },
    include: { user: true },
  });
}
