import { Box, Typography } from '@mui/material';

interface IconAndTitleProps {
	Image: React.FC | string;
	Title: React.FC | string;
}

const IconAndTitle: React.FC<IconAndTitleProps> = ({ Image, Title }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'flex-start',
				alignItems: 'center',
				gap: 1,
			}}
		>
			<Image />
			{typeof Title === 'string' ? (
				<Typography
					sx={{ fontSize: '0.8rem', lineHeight: 1, fontWeight: 600 }}
				>
					{Title}
				</Typography>
			) : (
				<Title />
			)}
		</Box>
	);
};

export default IconAndTitle;
