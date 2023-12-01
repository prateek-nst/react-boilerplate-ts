import { Typography } from '@mui/material';

type Props = {
	text: string;
	color: string;
};

const TextWithUnderline: React.FC<Props> = ({ text, color }) => {
	return (
		<Typography
			sx={{
				textDecoration: 'underline',
				':hover': {
					textDecoration: 'none',
				},
				color: color,
				cursor: 'pointer',
				fontSize: '1rem',
			}}
		>
			{text}
		</Typography>
	);
};

export default TextWithUnderline;
