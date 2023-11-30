import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Grid, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import FederalLogo from '../../../assets/svg/FederalLogo';
import Pending from '../../../assets/svg/PendingStatus';
import AvatarBadges from '../../../components/AvatarBadges';
import BankAndCount from '../../../components/BankAndCount';
import IconAndTitle from '../../../components/IconAndTitle';
import IconicCard from '../../../components/IconicCard';

export default function TableAccordion() {
	return (
		<div style={{ width: '100%' }}>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Grid container alignItems="center">
						<Grid item xs={1.7}>
							<IconicCard title="rajaram" number="14152738" />
						</Grid>
						<Grid item xs={1.7}>
							<Box sx={{ display: 'flex', gap: 1 }}>
								<FederalLogo />
								<BankAndCount text="Agri" badgeNumber={1} />
							</Box>
						</Grid>
						<Grid item xs={1.7}>
							<Typography
								sx={{
									fontWeight: 700,
									fontSize: '0.8rem',
									opacity: 0.8,
								}}
							>
								₹ 80,000
							</Typography>
						</Grid>
						<Grid item xs={1.7}>
							<Typography
								sx={{
									fontWeight: 700,
									opacity: 0.8,
									fontSize: '0.8rem',
								}}
							>
								<span
									style={{
										fontWeight: 300,
										opacity: 0.8,
										color: '#A7A6A6',
										paddingRight: '0.9rem',
									}}
								>
									UPI
								</span>
								₹ 60,000
							</Typography>
							<Typography
								sx={{
									fontWeight: 700,
									opacity: 0.8,
									fontSize: '0.8rem',
								}}
							>
								<span
									style={{
										fontWeight: 300,
										opacity: 0.8,
										color: '#A7A6A6',
										paddingRight: '0.3rem',
									}}
								>
									Cash
								</span>
								₹ 60,000
							</Typography>
						</Grid>
						<Grid item xs={1.7}>
							<Typography
								sx={{
									fontWeight: 700,
									opacity: 0.8,
									fontSize: '0.8rem',
								}}
							>
								₹ 60,000
							</Typography>
						</Grid>
						<Grid item xs={1.7}>
							<Grid container alignItems="center">
								<Grid item></Grid>
								<Grid item>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
											gap: 1,
										}}
									>
										<AvatarBadges show="both" />
										<Typography
											sx={{
												fontWeight: 700,
												opacity: 0.8,
												fontSize: '0.8rem',
											}}
										>
											₹ 60,000
										</Typography>
									</Box>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={1.7}>
							<IconAndTitle Image={Pending} Title="Active Pending" />
						</Grid>
					</Grid>
				</AccordionSummary>
				<AccordionDetails sx={{ marginRight: '2.5rem' }}>
					<Grid container spacing={2} alignItems="center">
						<Grid item xs={1.7}></Grid>
						<Grid item xs={1.7}>
							<IconAndTitle Image={FederalLogo} Title="JLG" />
						</Grid>
						<Grid item xs={1.7}>
							<Typography
								sx={{
									fontWeight: 700,
									opacity: 0.8,
									fontSize: '0.8rem',
								}}
							>
								₹ 60,000
							</Typography>
						</Grid>
						<Grid item xs={1.7}>
							<Typography
								sx={{
									fontWeight: 700,
									opacity: 0.8,
									fontSize: '0.8rem',
								}}
							>
								<span
									style={{
										fontWeight: 300,
										opacity: 0.8,
										color: '#A7A6A6',
										paddingRight: '0.9rem',
									}}
								>
									UPI
								</span>
								₹ 60,000
							</Typography>
							<Typography
								sx={{
									fontWeight: 700,
									opacity: 0.8,
									fontSize: '0.8rem',
								}}
							>
								<span
									style={{
										fontWeight: 300,
										opacity: 0.8,
										color: '#A7A6A6',
										paddingRight: '0.3rem',
									}}
								>
									Cash
								</span>
								₹ 60,000
							</Typography>
						</Grid>
						<Grid item xs={1.7}>
							<Typography
								sx={{
									fontWeight: 700,
									opacity: 0.8,
									fontSize: '0.8rem',
								}}
							>
								₹ 60,000
							</Typography>
						</Grid>
						<Grid item xs={1.7}>
							<Grid container alignItems="center">
								<Grid item></Grid>
								<Grid item>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
											gap: 1,
										}}
									>
										<AvatarBadges show="both" />
										<Typography
											sx={{
												fontWeight: 700,
												opacity: 0.8,
												fontSize: '0.8rem',
											}}
										>
											₹ 60,000
										</Typography>
									</Box>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={1.7}>
							<IconAndTitle Image={Pending} Title="Active Pending" />
						</Grid>
					</Grid>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
