import { api, setApiAuthToken } from '$lib/api';
import { tokenStorageName } from '$lib/auth/tokenStorageName';
import { me } from '$lib/user/meStore';

const token = localStorage.getItem(tokenStorageName);

if (token) {
	setApiAuthToken(token);
}

async function getMe() {
	try {
		const res = await api.get('/users/me');
		me.set(res.data);
	} catch {
		me.set(undefined);
	}
}

getMe();
