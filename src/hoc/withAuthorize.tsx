import { useAppState } from '@/store/useAppState';
import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuthorize = (roles: string[]) => {
	return function <T extends Props>(Component: React.ComponentType<T>) {
		const AuthorizedComponent = (props: T) => {
			const { app } = useAppState();

			if (!roles.includes(app.user?.role as string)) {
				console.log(
					props.logger.info(
						{ message: 'Unauthrorized acess' },
						app.user?.id as string,
						Component.name,
					),
				);
				return <Navigate to="/" />;
			}

			// Render the wrapped component if the user has the required role
			return <Component {...(props as T)} />;
		};

		return AuthorizedComponent;
	};
};

export default withAuthorize;
