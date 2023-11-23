import { goto } from '$app/navigation';
import { me } from '$lib/user/meStore';
import { tokenStorageName } from './tokenStorageName';

export function logOut() {
	me.set(undefined);
	localStorage.removeItem(tokenStorageName);
	goto('/sign-in');
}
