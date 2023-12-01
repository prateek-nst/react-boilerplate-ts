import APIClient, { axiosInstance } from '@/services/apiClient';

export interface Response {
	payload: {
		data: {
			distinctFilters: {
				pincode: string[];
				stakeholders: { name: string; code: string }[];
				products: { name: string; code: string }[];
				stage: string[];
			};
			filteredData: {
				count: number;
				rows: {
					status: string;
					stage: string;
					customerID: string;
					villages: string;
					pincode: string;
					fullName: string;
					stakeholderCode: string;
					productCode: string;
					productName: string;
					stakeholderName: string;
					profileImage: string;
				}[];
			};
		};
		message: string;
		code: string;
	};
}

export interface Request {
	payload: {
		data: {
			pincode: string[];
			stakeholderCode: [];
			productCode: [];
			stage: [];
			date: {
				startDate: string;
				endDate: string;
			};
		};
		skip: number;
		limit: number;
	};
}

class ReportClient<Req, Res> extends APIClient {
	async getReport(payload: Req) {
		return await axiosInstance
			.post<Res>(this.endpoint, payload)
			.then((res) => res.data);
	}
}

export default new ReportClient<Request, Response>(
	'/data/v1/report/customer/reports',
);
