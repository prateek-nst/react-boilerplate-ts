/* eslint-disable @typescript-eslint/no-explicit-any */
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

const DI = (Component: any) => {
	return function (props: any) {
		return (
			<ErrorBoundary fallback={<div>Component has failed to render</div>}>
				<Component {...props}>{props.children}</Component>
			</ErrorBoundary>
		);
	};
};

export default DI;
