import { Box, Typography } from '@mui/material';

const ProductWithBadge = ({
	text = 'JLG',
	badgeNumber = 1,
}: {
	text: string;
	badgeNumber: number;
}) => {
	return (
		<Box>
			<Box
				sx={{
					width: 'max-content',
					position: 'relative',
					'&::after': {
						content: `"+${badgeNumber}"`,
						position: 'absolute',
						width: '1rem',
						height: '1rem',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						color: '#35C535',
						fontSize: '0.5rem',
						fontWeight: 700,
						borderRadius: '50%',
						backgroundColor: '#D3FFD3',
						top: -9,
						right: -9,
					},
				}}
			>
				<Typography sx={{ fontSize: '0.9rem' }}>{text}</Typography>
			</Box>
		</Box>
	);
};

export default ProductWithBadge;
