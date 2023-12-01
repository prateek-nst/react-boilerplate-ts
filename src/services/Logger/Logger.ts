export class DevLogger implements LoggerType {
	info(data: { message: string }, user: string, page: string) {
		const { message } = data;
		const currentDate = new Date();
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

export class ProdLogger implements LoggerType {
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
