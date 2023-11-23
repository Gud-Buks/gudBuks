import { Comment } from "@prisma/client";
import { db } from "../db";

type CreateBookDto = {
  text: string;
  userId: string;
  bookId: string;
};

export async function createComment({
  text,
  userId,
  bookId,
}: CreateBookDto): Promise<Comment> {
  return db.comment.create({
    data: {
      bookId,
      text,
      userId,
    },
    include: { user: true },
  });
}
