import { db } from "../db";

type DeleteCommentDto = {
  id: string;
  userId: string;
};

export async function deleteComment({ id, userId }: DeleteCommentDto) {
  const comment = await db.comment.findUnique({ where: { id } });

  if (!comment) {
    throw { status: 400, message: "Comment not found" };
  }

  if (comment.userId !== userId) {
    throw { status: 401, message: "Unauthorized comment delete" };
  }

  await db.comment.delete({ where: { id } });
}
