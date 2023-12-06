/* eslint-disable @typescript-eslint/no-explicit-any */
import { getLogger, getStorage } from '@/utils/common';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import React from 'react';

const DI = <T extends Props>(Component: React.ComponentType<T>) => {
	return function (props: Omit<T, 'logger' | 'storage'>) {
		const logger = getLogger();
		const storage = getStorage();

		const newProps = { ...props, logger, storage } as T;

		return (
			<ErrorBoundary fallback={<div>Component has failed to render</div>}>
				<Component {...newProps} />
			</ErrorBoundary>
		);
	};
};

export default DI;
