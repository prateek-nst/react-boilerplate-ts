import DI from '@/hoc/DI';

interface MonitorProps extends Props {
	id: string;
}

const Monitor = (props: MonitorProps) => {
	console.log(props);
	return <div>Monitor</div>;
};

export default DI(Monitor);
