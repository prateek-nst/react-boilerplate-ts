/**
 * The BaseLogger class
 * Extending from this class makes the subclass singleton
 */

export class BaseLogger implements LoggerType {
	protected static instance: any;

	public static getInstance() {
		if (!this.instance) {
			this.instance = new this();
		}

		return this.instance;
	}

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
