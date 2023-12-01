import APIClient, { axiosInstance } from '@/services/apiClient';

export interface Request {
	payload: {
		employeeId: string;
		password: string;
	};
}

export interface Response {
	payload: {
		data?: User;
		error?: string;
		message: string;
		code: string;
	};
}

class LoginClient<Req, Res> extends APIClient {
	async login(payload: Req) {
		return await axiosInstance
			.post<Res>(this.endpoint, payload)
			.then((res) => res.data);
	}
}

export default new LoginClient<Request, Response>('/auth/v2/auth/login');
