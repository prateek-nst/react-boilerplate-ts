import { DevLogger, ProdLogger } from '@/services/Logger/Logger';

let initialAppState: appState = {} as appState;

console.log(import.meta.env.MODE);

switch (import.meta.env.MODE) {
	case 'development':
		initialAppState = {
			logger: new DevLogger(),
			loading: false,
			storage: window.sessionStorage,
		};
		break;
	case 'production':
		initialAppState = {
			logger: new ProdLogger(),
			loading: false,
			storage: window.sessionStorage,
		};
		break;
}

export default initialAppState;
