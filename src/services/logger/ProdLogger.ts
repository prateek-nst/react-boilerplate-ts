import { BaseLogger } from './BaseLogger';

export class ProdLogger extends BaseLogger implements LoggerType {
	private constructor() {
		super();
	}

	info(data: { message: string }, user: string, page: string) {
		const { message } = data;
		const currentDate = new Date();
		console.log('sending to server');
		console.log(
			`id: ${page}, message: ${message}, date: ${currentDate}, user: ${user}`,
		);
	}
	error(error: Error, user: string, page: string) {
		const { message } = error;
		const currentDate = new Date();
		console.error(
			`id: ${page}, message: ${message}, date: ${currentDate}, user: ${user}`,
		);
	}
}
