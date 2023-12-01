import { create } from 'zustand';
import initialAppState from './intialAppState';

interface appStore {
	app: appState;
	setLogger: (log: LoggerType) => void;
	setUser: (user: User) => void;
	setLoading: (flag: boolean) => void;
}

export const useAppState = create<appStore>((set) => ({
	app: initialAppState,

	setLogger: (log: LoggerType) =>
		set((state) => {
			return {
				...state,
				app: {
					...state.app,
					logger: log,
				},
			};
		}),

	setUser: (user: User) =>
		set((state) => {
			return {
				...state,
				app: {
					...state.app,
					user: user,
				},
			};
		}),

	setLoading: (flag: boolean) =>
		set((state) => {
			return {
				...state,
				app: {
					...state.app,
					loading: flag,
				},
			};
		}),
}));
