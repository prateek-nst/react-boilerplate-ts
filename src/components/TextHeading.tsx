import { Typography } from '@mui/material';

type Props = {
	text: string;
	color?: string;
	fontSize?: string;
	fontWeight?: number;
};

const TextHeading: React.FC<Props> = ({
	text,
	color = '#F7A800',
	fontSize = '1.2rem',
	fontWeight = 700,
}) => {
	return (
		<Typography
			sx={{
				fontSize: fontSize,
				fontWeight: fontWeight,
				width: 'max-content',
				paddingBottom: '0.5rem',
				position: 'relative',
				'::after': {
					content: "''",
					position: 'absolute',
					width: '2.5rem',
					height: '0.5rem',
					backgroundColor: color,
					bottom: 0,
					left: 0,
					borderRadius: '0.2rem',
				},
			}}
		>
			{text}
		</Typography>
	);
};

export default TextHeading;
