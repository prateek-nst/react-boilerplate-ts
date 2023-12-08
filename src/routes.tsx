import { Suspense } from 'react';

import ErrorPage from '@/components/Error/Error';
import Dhanam from '@/layout/Dhanam';
import DepositCollect from '@/pages/DepositCollect/DepositCollect';
import Login from '@/pages/Login/Login';
import AuthRequired from './components/AuthRequired';
import Monitor from './pages/Monitor/Monitor';

// import Dhanam from '../layout/Dhanam';
// import DepositCollect from '../pages/deposit-collect/DepositCollect';
// import ErrorPage from '../pages/error/Error';

// import Login from '../pages/Login/Login';

// import Monitor from '../pages/monitor/Monitor';
// import RelationshipOfficerCustomerName from '../pages/monitor/RelationshipOfficerCustomerName';
// import RelationshipOfficerGroupName from '../pages/monitor/RelationshipOfficerGroupName';
// import WorkSpace from '../pages/workspace/WorkSpace';

// const Dhanam = lazy(() => import('../layout/Dhanam'));
// const DepositCollect = lazy(() => import('../pages/deposit-collect/DepositCollect'));

export const routes = [
	{
		path: '/',
		element: <Login />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/workspace',
		element: <>work space</>,
		errorElement: <ErrorPage />,
	},

	{
		path: '/',
		element: (
			<Suspense>
				<Dhanam />
			</Suspense>
		),
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/deposit-collect',
				element: (
					<Suspense fallback={'Loading ...'}>
						<AuthRequired>
							<DepositCollect id={0} city={''} />
						</AuthRequired>
					</Suspense>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: '/monitor',
				element: (
					<AuthRequired>
						<Monitor id="1" />
					</AuthRequired>
				),
				errorElement: <ErrorPage />,
			},
		],
	},
];
