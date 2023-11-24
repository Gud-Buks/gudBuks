import type { Comment } from '$lib/types/comment';
import { writable } from 'svelte/store';

export const comments = writable<Comment[]>();
