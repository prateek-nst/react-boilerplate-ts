/* eslint-disable @typescript-eslint/no-unused-vars */
import { getStorage } from '@/utils/common';
import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_UMS_BASE_URL,
});

const storage = getStorage();

axiosInstance.interceptors.request.use(
	(config) => {
		config.headers = config.headers || {};

		const wsoToken = storage.getItem('wsoToken');

		if (wsoToken) {
			config.headers['Authorization'] = `Bearer ${wsoToken}`;
		}

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
