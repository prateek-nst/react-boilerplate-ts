/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_APP_BASE_URL,
});

axiosInstance.interceptors.request.use(
	(config) => {
		config.headers = config.headers || {};

		const authToken = sessionStorage.getItem('authToken');
		const partnerId = sessionStorage.getItem('partnerId');

		// console.log(authToken);

		config.headers['Authorization'] = `Bearer ${authToken}`;
		config.headers['Content-Type'] = 'application/json';
		config.headers['partner-id'] = partnerId;

		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

class APIClient {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}
}

export { axiosInstance };
export default APIClient;
