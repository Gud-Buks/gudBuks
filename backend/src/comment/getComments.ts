import { db } from "../db";

export async function getComments(bookId: string) {
  return db.comment.findMany({
    where: { bookId },
    include: { user: true },
    orderBy: { createdAt: "desc" },
  });
}
