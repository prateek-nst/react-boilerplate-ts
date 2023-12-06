import { getLogger, getStorage } from '@/utils/common';

let initialAppState: appState = {} as appState;

switch (import.meta.env.MODE) {
	case 'development':
		initialAppState = {
			logger: getLogger(),
			loading: false,
			storage: getStorage(),
		};
		break;
	case 'production':
		initialAppState = {
			logger: getLogger(),
			loading: false,
			storage: getStorage(),
		};
		break;
}

export default initialAppState;
