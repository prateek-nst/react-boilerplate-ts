// import { BaseLogger } from '@/services/logger/BaseLogger';
import { DevLogger } from '@/services/logger/DevLogger';
import { ProdLogger } from '@/services/logger/ProdLogger';

export function getLogger(): LoggerType {
	let logger;
	switch (import.meta.env.MODE) {
		case 'development':
			logger = DevLogger.getInstance();
			break;
		case 'production':
			logger = ProdLogger.getInstance();
			break;
		default:
			throw new Error(
				`Undefined environment. Make sure you define the corresponding Logger class.`,
			);
	}

	return logger;
}

export function getStorage(): StorageInterface {
	let storage;
	switch (import.meta.env.VITE_STORAGE) {
		case 'localStorage':
			storage = window.localStorage;
			break;
		case 'sessionStorage':
			storage = window.sessionStorage;
			break;
		default:
			throw new Error(
				'Undefined storage. Possible values: localStorage, sessionStorage',
			);
	}

	return storage;
}
