/* eslint-disable @typescript-eslint/no-explicit-any */
import { getLogger, getStorage } from '@/utils/common';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import React from 'react';
import { roles } from '@/utils/roles';

const DI = <T extends Props>(Component: React.ComponentType<T>) => {
	return function (
		props: Omit<T, 'logger' | 'storage' | 'componentName' | 'roles'> & {
			children?: React.ReactNode;
		},
	) {
		const logger = getLogger();
		const storage = getStorage();
		const componentName = Component.name;

		const newProps = { ...props, logger, storage, componentName, roles } as T;

		return (
			<ErrorBoundary fallback={<div>Component has failed to render</div>}>
				<Component {...newProps}>{props.children}</Component>
			</ErrorBoundary>
		);
	};
};

export default DI;
