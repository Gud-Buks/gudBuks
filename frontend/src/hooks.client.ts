import { setApiAuthToken } from '$lib/api';
import { tokenStorageName } from '$lib/auth/tokenStorageName';

const token = localStorage.getItem(tokenStorageName);

if (token) {
	setApiAuthToken(token);
}
