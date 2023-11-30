import React from 'react';

interface ErrorBoundaryProps {
	fallback?: React.ReactNode;
	children: React.ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	// Equivalent to:
	// const [hasError, setHasError] = useState(false);

	constructor(props: ErrorBoundaryProps) {
		super(props);

		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		// console.log(error.toString());
		console.error(error);
		console.log(error.stack);
		console.info({ errorInfo });
	}

	render() {
		if (this.state.hasError) {
			return this.props.fallback || null;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
