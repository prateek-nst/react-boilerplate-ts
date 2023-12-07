import DI from '@/hoc/DI';

const Dash = (props: Props) => {
	return (
		<div>
			<ul>
				<li>one</li>
			</ul>
			<div className="children">{props.children}</div>
		</div>
	);
};

export default DI(Dash);
