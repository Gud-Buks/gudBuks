import type { Book } from './book';
import type { User } from './user';

export type Comment = {
	id: string;
	book: Book;
	user: User;
	text: string;
	userId: string;
	bookId: string;
	createdAt: string;
};
