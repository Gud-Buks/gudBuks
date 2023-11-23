import { Comment } from "@prisma/client";
import { db } from "../db";

type DeleteCommentDto = {
    commentId: string;
    userId: string;
};

export async function deleteComment({
    commentId,
    userId,
}: DeleteCommentDto): Promise<Comment | null> {
    // Verificar se o usuário tem permissão para excluir o comentário
    const existingComment = await db.comment.findUnique({
        where: { id: commentId },
    });

    if (!existingComment) {
        throw new Error("Comentário não encontrado");
    }

    if (existingComment.userId !== userId) {
        throw new Error("Usuário não tem permissão para excluir este comentário");
    }

    // Excluir o comentário
    return db.comment.delete({
        where: { id: commentId },
    });
}
