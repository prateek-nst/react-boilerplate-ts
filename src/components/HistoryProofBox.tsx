import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Divider, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import FederalLogo from '../assets/svg/FederalLogo';
import CashDenominationBox from './CashDenominationBox';
import ImageChip from './ImageChip';
import { CollectionIdList } from './UpdateProofBox';

const HistoryProofBox = () => {
	return (
		<Box
			sx={{
				backgroundColor: '#fff',
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Typography>Bank Product</Typography>
				<Box sx={{ display: 'flex', gap: 2 }}>
					<FederalLogo />
					<Typography>JLG</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Typography>Date & Time</Typography>
				<Typography fontStyle={'italic'}>15 August 2023, 2:00PM</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Typography>Collection File ID</Typography>
				<Box sx={{ display: 'flex', gap: 2 }}>
					{CollectionIdList.value.map((item, index) => (
						<Typography fontWeight={700} key={`collectionId-${index}`}>
							{item}
						</Typography>
					))}
				</Box>
			</Box>
			<Divider />
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					backgroundColor: 'yellow',
				}}
			>
				<Accordion
					sx={{
						width: '100%',
						'&.MuiAccordion-root': {
							boxShadow: 'none',
						},
					}}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
						sx={{ display: 'flex' }}
					>
						<Box sx={{ flex: 1 }}>
							<Typography fontWeight={700}>
								Cash Denomination
							</Typography>
						</Box>
						<Box
							sx={{
								display: 'flex',
								gap: 1,
							}}
						>
							<Typography fontWeight={700}>Total Amount:</Typography>
							<Typography fontWeight={700}>
								₹{(35000).toLocaleString()}
							</Typography>
						</Box>
					</AccordionSummary>
					<AccordionDetails>
						<CashDenominationBox />
					</AccordionDetails>
				</Accordion>
			</Box>
			<Divider />
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Typography>Bank Name</Typography>
				<FederalLogo />
			</Box>
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Typography>Total Amount</Typography>
				<Typography>₹{(5000).toLocaleString()}</Typography>
			</Box>
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Typography>Bank Account Number</Typography>
				<Typography>127356357</Typography>
			</Box>
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Typography>UTR Number</Typography>
				<Typography>12735635757698</Typography>
			</Box>
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Typography>Deposited By</Typography>
				<Typography>Shecommerz Branch Name</Typography>
			</Box>
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Typography>Deposit Proof</Typography>

				<Box
					sx={{
						display: 'flex',
						gap: 1,
						flex: 1,
						justifyContent: 'flex-end',
						alignItems: 'center',
						flexWrap: 'wrap',
					}}
				>
					<ImageChip
						title={'1'}
						imgSrcOrText={
							'https://m.timesofindia.com/photo/102599392/102599392.jpg'
						}
					/>
					<ImageChip
						title={'1'}
						imgSrcOrText={
							'https://m.timesofindia.com/photo/102599392/102599392.jpg'
						}
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default HistoryProofBox;
