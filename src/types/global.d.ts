export {};

declare global {
	interface ErrorType {
		statusText?: string;
		message?: string;
	}

	interface User {
		isRestPassword: string;
		userName: string;
		id: string;
		role: string;
		lastLogin: string;
		name: string;
		mobileNumber: string;
		accessToken: string;
		refreshToken: string;
		profileIcon: string;
	}

	interface StorageInterface {
		getItem(key: string): string | null;
		setItem(key: string, value: string): void;
		removeItem(key: string): void;
		clear(): void;
	}

	const localStore: LocalStorage = {
		getItem: (key: string) => localStorage.getItem(key),
		setItem: (key: string, value: string) => localStorage.setItem(key, value),
		removeItem: (key: string) => localStorage.removeItem(key),
		clear: () => localStorage.clear(),
	};

	const sessionStore: SessionStorage = {
		getItem: (key: string) => sessionStorage.getItem(key),
		setItem: (key: string, value: string) => sessionStorage.setItem(key, value),
		removeItem: (key: string) => sessionStorage.removeItem(key),
		clear: () => sessionStorage.clear(),
	};

	interface LoggerType {
		info(data: { message: string }, user: string, page: string): void;
		error(data: Error, user: string, page: string): void;
	}

	type Role = 'SBM' | 'RH' | 'SH' | 'CPVE' | 'FO';

	// type for various screens
	type Screens = 'DepositCollect' | 'LoanApproval' | 'Reports' | 'Monitor';

	// mapping defines which screen is accessible to which roles
	type ScreenRole = { [key in Screens]: Role[] };

	interface Props {
		logger: LoggerType;
		storage: StorageInterface;
		componentName: string;
		children?: React.ReactNode;
		roles: ScreenRole;
	}

	// app state that we can carry around the whole app
	interface appState {
		logger: LoggerType;
		user?: User;
		loading: boolean; // a global loader
		storage: StorageInterface;
	}

	interface RouteType {
		path: string;
		component: React.ReactNode;
		exact: boolean;
		roles: string[];
		private?: boolean;
		showHeaderSidebar?: boolean;
	}

	type UserRole =
		| 'SBM' // SHECOM branch manager
		| 'CSM' // NST Customer Success Manager
		| 'FBBM'; // Federal Bank Branch Manager
}
