import DI from '@/hoc/DI.tsx';
import { useAppState } from '@/store/useAppState';

const DepositCollect = (props: Props) => {
	const { app } = useAppState();

	console.log(app.user);

	props.logger.info(
		{ message: 'deposit-collected loaded' },
		'user1',
		props.componentName,
	);

	return <>deposit collect</>;
};

export default DI(DepositCollect);
