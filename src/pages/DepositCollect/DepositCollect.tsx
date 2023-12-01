import DI from '@/hoc/DI.tsx';
import { useAppState } from '@/store/useAppState';
// import { useAppState } from '@/state/client/useAppState.tsx';

const DepositCollect = () => {
	const { app } = useAppState();
	console.log(app.user);
	// console.log(i);

	return <>deposit collect</>;
};

export default DI(DepositCollect);
