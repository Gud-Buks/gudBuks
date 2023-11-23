import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://localhost:8080/api/v1'
});

export function setApiAuthToken(token: string) {
	api.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}
