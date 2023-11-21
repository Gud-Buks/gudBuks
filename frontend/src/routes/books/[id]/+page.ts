import { api } from '$lib/api';
import type { Book } from '$lib/types/book';
import type { Comment } from '$lib/types/comment';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const id = params.id;

	async function getBook() {
		const res = await api.get<Book>('/books/' + id);
		return res.data;
	}

	async function getComments() {
		const res = await api.get<Comment[]>('/comments?bookId=' + id);
		return res.data;
	}

	const book = await getBook();
	const comments = await getComments();

	return { id, book, comments };
};
