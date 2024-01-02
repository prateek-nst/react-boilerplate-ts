/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_WSO2_URL,
});

axiosInstance.interceptors.request.use(
	(config) => {
		config.headers = config.headers || {};

		config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
		config.headers['Authorization'] = `Basic ${
			import.meta.env.VITE_INITIAL_TOKEN
		}`;

		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

class WSOClient {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getWSOToken<Req, Res>(payload: Req) {
		return axiosInstance
			.post<Res>(this.endpoint, payload)
			.then((res) => res.data);
	}
}

export default WSOClient;
