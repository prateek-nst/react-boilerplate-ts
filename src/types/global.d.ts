export {};

declare global {
	interface ErrorType {
		statusText?: string;
		message?: string;
	}

	interface User {
		accessToken: string;
		refreshToken: string;
		lastLoggedIn: string;
		partnerId: string;
		productId: string;
		role: string;
		roleCode: string;
		userName: string;
		profileImage: string;
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
