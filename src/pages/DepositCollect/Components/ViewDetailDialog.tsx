import CloseIcon from '@mui/icons-material/Close';
import { Box, Grid, IconButton, Typography } from '@mui/material';

import IconicCard from '../../../components/IconicCard';
import GroupsAndCustomerTabs from './GroupsAndCustomerTabs';
const ViewDetailDialog = () => {
	return (
		<Box
			sx={{
				padding: '0rem 1.5rem 1.5rem 1.5rem',
				position: 'relative',
				display: 'flex',
				flexDirection: 'column',
				gap: 3,
				backgroundColor: '#F3F3F3',
				height: '100%',
			}}
		>
			<Box
				sx={{
					position: 'sticky',
					top: '0',
					zIndex: 10000,
					backgroundColor: '#F3F3F3',
				}}
			>
				<Grid
					container
					sx={{
						width: '100%',
						display: 'flex',
						alignItems: 'flex-start',
						justifyContent: 'space-between',
						pb: 1,
						pt: 3,
					}}
				>
					<Grid item>
						<IconicCard
							title="RAJARAM"
							number="+91 123456756"
							role="Relationship Officer"
						/>
					</Grid>
					<Grid item>
						<Box>
							<IconButton size="small">
								<CloseIcon />
							</IconButton>
						</Box>
					</Grid>
				</Grid>
			</Box>
			<Box>
				<Grid container gap={3} direction={'column'}>
					<Grid container item justifyContent={'space-between'}>
						<Grid item>
							<Typography sx={{ fontWeight: 700, opacity: 0.9 }}>
								Collection Target
							</Typography>
						</Grid>
						<Grid item>
							{' '}
							<Typography
								sx={{ fontStyle: 'italic', fontSize: '0.9rem' }}
							>
								15 August 2023
							</Typography>
						</Grid>
					</Grid>
					<Grid item sx={{ width: '100%' }}>
						<Box
							sx={{
								padding: '1rem',
								backgroundColor: '#ffffff',
								borderRadius: '4px',
								display: 'flex',
							}}
						>
							<Grid container rowGap={3} columnSpacing={4}>
								<Grid item xs={3}>
									<Typography
										sx={{ fontWeight: 900, fontSize: '0.9rem' }}
									>
										₹8,620
									</Typography>
									<Typography
										sx={{ fontSize: '0.7rem', color: '#838383' }}
									>
										Total
									</Typography>
								</Grid>
								<Grid item xs={3}>
									<Typography
										sx={{ fontWeight: 900, fontSize: '0.9rem' }}
									>
										₹15,000
									</Typography>
									<Typography
										sx={{ fontSize: '0.7rem', color: '#838383' }}
									>
										EMI
									</Typography>
								</Grid>
								<Grid item xs={3}>
									<Typography
										sx={{ fontWeight: 900, fontSize: '0.9rem' }}
									>
										₹5,000
									</Typography>
									<Typography
										sx={{ fontSize: '0.7rem', color: '#838383' }}
									>
										OD
									</Typography>
								</Grid>
								<Grid item xs={3}>
									<Typography
										sx={{ fontWeight: 900, fontSize: '0.9rem' }}
									>
										10
									</Typography>
									<Typography
										sx={{ fontSize: '0.7rem', color: '#838383' }}
									>
										Groups
									</Typography>
								</Grid>
								<Grid item xs={3}>
									<Typography
										sx={{ fontWeight: 900, fontSize: '0.9rem' }}
									>
										20
									</Typography>
									<Typography
										sx={{ fontSize: '0.7rem', color: '#838383' }}
									>
										Customers
									</Typography>
								</Grid>
							</Grid>
						</Box>
					</Grid>
					<Grid container item justifyContent={'space-between'}>
						<Grid item>
							<Typography sx={{ fontWeight: 700, opacity: 0.9 }}>
								Collection Completed
							</Typography>
						</Grid>
					</Grid>
					<Grid item sx={{ width: '100%' }}>
						<Box
							sx={{
								padding: '1rem',
								backgroundColor: '#ffffff',
								borderRadius: '4px',
								display: 'flex',
							}}
						>
							<Grid container rowGap={3} columnSpacing={4}>
								<Grid item xs={3}>
									<Typography
										sx={{ fontWeight: 900, fontSize: '0.9rem' }}
									>
										₹8,620
									</Typography>
									<Typography
										sx={{ fontSize: '0.7rem', color: '#838383' }}
									>
										Total
									</Typography>
								</Grid>
								<Grid item xs={3}>
									<Typography
										sx={{ fontWeight: 900, fontSize: '0.9rem' }}
									>
										₹15,000
									</Typography>
									<Typography
										sx={{ fontSize: '0.7rem', color: '#838383' }}
									>
										Cash
									</Typography>
								</Grid>
								<Grid item xs={3}>
									<Typography
										sx={{ fontWeight: 900, fontSize: '0.9rem' }}
									>
										₹5,000
									</Typography>
									<Typography
										sx={{ fontSize: '0.7rem', color: '#838383' }}
									>
										UPI
									</Typography>
								</Grid>
								<Grid item xs={3}>
									<Typography
										sx={{ fontWeight: 900, fontSize: '0.9rem' }}
									>
										10
									</Typography>
									<Typography
										sx={{ fontSize: '0.7rem', color: '#838383' }}
									>
										Groups
									</Typography>
								</Grid>
								<Grid item xs={3}>
									<Typography
										sx={{ fontWeight: 900, fontSize: '0.9rem' }}
									>
										20
									</Typography>
									<Typography
										sx={{ fontSize: '0.7rem', color: '#838383' }}
									>
										Customers
									</Typography>
								</Grid>
								<Grid item xs={3}>
									<Typography
										sx={{ fontWeight: 900, fontSize: '0.9rem' }}
									>
										₹5,000
									</Typography>
									<Typography
										sx={{ fontSize: '0.7rem', color: '#838383' }}
									>
										EMI
									</Typography>
								</Grid>
								<Grid item xs={3}>
									<Typography
										sx={{ fontWeight: 900, fontSize: '0.9rem' }}
									>
										₹5,000
									</Typography>
									<Typography
										sx={{ fontSize: '0.7rem', color: '#838383' }}
									>
										OD
									</Typography>
								</Grid>
								<Grid item xs={3}>
									<Typography
										sx={{ fontWeight: 900, fontSize: '0.9rem' }}
									>
										₹5,000
									</Typography>
									<Typography
										sx={{ fontSize: '0.7rem', color: '#838383' }}
									>
										Advance
									</Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography
										sx={{ fontWeight: 900, fontSize: '0.9rem' }}
									>
										20
									</Typography>
									<Typography
										sx={{ fontSize: '0.7rem', color: '#838383' }}
									>
										Reschedule customers
									</Typography>
								</Grid>
							</Grid>
						</Box>
					</Grid>
					<Grid item>
						<Box>
							<Typography sx={{ fontWeight: 700, opacity: 0.9 }}>
								Collection File
							</Typography>
						</Box>
					</Grid>
					<Grid item>
						<GroupsAndCustomerTabs />
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default ViewDetailDialog;
