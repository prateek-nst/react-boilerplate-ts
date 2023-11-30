import React from 'react';

import { Card, CardContent, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';

interface CardItem {
	title: string;
	value: number;
}

interface CollectionProps {
	cardItems: CardItem[];
	CardImage: React.FC;
	imageColor: string;
	CardTitle: string;
}

const Collection: React.FC<CollectionProps> = ({
	cardItems,
	CardImage,
	imageColor,
	CardTitle,
}) => (
	<Box
		sx={{
			width: '100%',
			borderRadius: '15px',
			boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.2)',
		}}
	>
		<Card elevation={0}>
			<CardContent
				sx={{
					padding: '0rem 0rem',
					margin: '1rem 1rem -0.7rem 1rem',
				}}
			>
				<Box>
					<Grid
						container
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<Grid item sx={{ flex: 1 }}>
							<Typography
								sx={{
									fontWeight: 700,
									fontSize: '1rem',
									lineHeight: '1rem',
									marginBottom: '1.5rem',
								}}
							>
								{CardTitle}
							</Typography>
						</Grid>
						<Grid item sx={{ flex: 1, display: 'flex' }}>
							<Box sx={{ flex: 2 }}></Box>
							<Box
								sx={{
									flex: 1,
									borderRadius: '4px',
									backgroundColor: imageColor,
									display: 'flex',
									padding: '3px',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<CardImage />
							</Box>
						</Grid>
					</Grid>

					<Grid container rowSpacing={2} columnSpacing={0}>
						{cardItems.map((item, index) => (
							<Grid item xs={6} key={index}>
								<Typography
									sx={{
										color: '#838383',
										fontWeight: 400,
										fontSize: '0.5rem',
										lineHeight: '0.3rem',
										marginBottom: '0.5rem',
										textWrap: 'noWrap',
									}}
								>
									{item.title}
								</Typography>

								<Typography
									sx={{
										fontWeight: 600,
										fontSize: '0.8rem',
										lineHeight: 1,
									}}
								>
									{item.value}
								</Typography>
							</Grid>
						))}
					</Grid>
				</Box>
			</CardContent>
		</Card>
	</Box>
);

export default Collection;
