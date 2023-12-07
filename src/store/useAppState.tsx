import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import initialAppState from './intialAppState';
import { getStorage } from '@/utils/common';

interface appStore {
	app: appState;
	setLogger: (log: LoggerType) => void;
	setUser: (user: User) => void;
	setLoading: (flag: boolean) => void;
}

export const useAppState = create<appStore>()(
	persist(
		(set) => ({
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
		}),
		{
			name: 'userAppState', // name of the item in the storage (must be unique)
			storage: createJSONStorage(() => getStorage()), // (optional) by default, 'localStorage' is used
		},
	),
);
