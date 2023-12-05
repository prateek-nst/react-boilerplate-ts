/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_UMS_BASE_URL,
});

axiosInstance.interceptors.request.use(
	(config) => {
		config.headers = config.headers || {};

		const wsoToken = sessionStorage.getItem('wsoToken');
		// const accessToken = sessionStorage.getItem('accessToken');

		if (wsoToken) {
			config.headers['Authorization'] = `Bearer ${wsoToken}`;
		}

		// if (accessToken) {
		// 	config.headers['x-api-key'] = `${accessToken}`;
		// }

		config.headers['Content-Type'] = 'application/json';

		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

class UMSClient {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	login<Req, Res>(payload: Req) {
		return axiosInstance
			.post<Res>(this.endpoint, payload)
			.then((res) => res.data);
	}
}

export default UMSClient;
