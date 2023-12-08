import DI from '@/hoc/DI.tsx';
import withAuthorize from '@/hoc/withAuthorize';
// import withAuthorize from '@/hoc/withAuthorize';
import { useAppState } from '@/store/useAppState';
import { roles } from '@/utils/roles';

interface DepositCollectProps extends Props {
	id: number;
	city: string;
}

const DepositCollect = (props: DepositCollectProps) => {
	const { app } = useAppState();

	console.log(app.user);
	// console.log(roles.depositCollect);

	props.logger.info(
		{ message: 'deposit-collected loaded' },
		'user1',
		props.componentName,
	);

	return <>deposit collect</>;
};

export default DI(withAuthorize(roles.DepositCollect)(DepositCollect));
