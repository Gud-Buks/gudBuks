import { api } from '$lib/api';
import type { Book } from '$lib/types/book';
import type { PageLoad } from '../$types';

export const load: PageLoad = async ({ url }) => {
	const q = url.searchParams.get('q');
	let books: Book[] = [];
	if (q) {
		const res = await api.get<Book[]>('/books?q=' + q);
		books = res.data;
	}
	return { q, books };
};
