import { Box, FormControl, Grid, MenuItem, Select, Typography } from '@mui/material';

import CashCard from '@/assets/svg/CashCard.tsx';
import TicketsCard from '@/assets/svg/TicketsCard.tsx';
import DI from '@/hoc/DI.tsx';

import CollectedCard from '../../../assets/svg/CollectedCard.tsx';
import TargetCard from '../../../assets/svg/TargetCard.tsx';
import CardView from '../../../components/CardView';
import CustomTextfield from '../../../components/CustomTextfield.tsx';
import CollectTable from './CollectTable.tsx';

interface CardItem {
	title: string;
	value: number;
}
const CollectedItems: CardItem[] = [
	{ title: 'Cash', value: 8222 },
	{ title: 'UPI', value: 1222 },
	{ title: 'Total Collected', value: 1221 },
	{ title: 'Total Groups/Customers', value: 21 },
];
const TargetItems: CardItem[] = [
	{ title: 'Cash', value: 8222 },
	{ title: 'UPI', value: 1222 },
	{ title: 'Total Amount', value: 1221 },
	{ title: 'qcqc', value: 21 },
];
const CashItems: CardItem[] = [
	{ title: 'Cash', value: 8222 },
	{ title: 'UPI', value: 1222 },
	{ title: 'Total Amount', value: 1221 },
	{ title: 'qcqc', value: 21 },
];
const TicketsItems: CardItem[] = [
	{ title: 'Cash', value: 8222 },
	{ title: 'UPI', value: 1222 },
	{ title: 'Total Amount', value: 1221 },
	{ title: 'qcqc', value: 21 },
];

const CollectTab: React.FC = () => {
	// console.log(i);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 1,
				height: '100%',
				overflow: 'auto',
			}}
		>
			<Box>
				<Grid container justifyContent={'space-between'} rowGap={3}>
					<Grid item xs={12} sm={5.7} md={2.7}>
						<CardView
							cardItems={CollectedItems}
							CardImage={CollectedCard}
							imageColor="#EAF7EE"
							CardTitle="Collected"
						/>
					</Grid>
					<Grid item xs={12} sm={5.7} md={2.7}>
						<CardView
							cardItems={TargetItems}
							CardImage={TargetCard}
							imageColor="#E9EAFF"
							CardTitle="Target"
						/>
					</Grid>
					<Grid item xs={12} sm={5.7} md={2.7}>
						<CardView
							cardItems={CashItems}
							CardImage={CashCard}
							imageColor="#FFE9ED"
							CardTitle="Cash"
						/>
					</Grid>
					<Grid item xs={12} sm={5.7} md={2.7}>
						<CardView
							cardItems={TicketsItems}
							CardImage={TicketsCard}
							imageColor="#FFF2D6"
							CardTitle="Tickets"
						/>
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ padding: '1rem 0px' }}>
				<Grid container direction="row">
					<Grid container item xs={10} gap={1}>
						<Grid item xs={2.5}>
							<CustomTextfield />
						</Grid>
						<Grid item xs={2.5}>
							<FormControl fullWidth>
								<Select
									label="text"
									displayEmpty
									renderValue={(value: string | number) => {
										if (typeof value === 'string') {
											return value.length ? (
												value
											) : (
												<Typography
													sx={{
														fontSize: '0.8rem',
														fontWeight: 400,
														color: '#838383',
														lineHeight: 1,
														marginTop: '6px',
													}}
												>
													Product
												</Typography>
											);
										} else if (typeof value === 'number') {
											return value;
										} else {
											return (
												<Typography
													sx={{
														fontSize: '0.8rem',
														fontWeight: 400,
														color: '#838383',
														lineHeight: 1,
														marginTop: '6px',
													}}
												>
													Product
												</Typography>
											);
										}
									}}
									inputProps={{
										sx: {
											padding: 0.7,
											color: '#838383',
										},
									}}
									sx={{
										borderRadius: '3px',
										backgroundColor: '#ffffff',
										boxShadow: 'none',
										'.MuiOutlinedInput-notchedOutline': {
											border: 0,
										},
										'&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
											{
												border: 0,
											},
										'&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
											{
												border: 0,
											},
									}}
								>
									<MenuItem value={'jlg'}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={2.5}>
							<FormControl fullWidth>
								<Select
									label="text"
									displayEmpty
									renderValue={(value: string | number) => {
										if (typeof value === 'string') {
											return value.length ? (
												value
											) : (
												<Typography
													sx={{
														fontSize: '0.8rem',
														fontWeight: 400,
														color: '#838383',
														lineHeight: 1,
														marginTop: '6px',
													}}
												>
													Product
												</Typography>
											);
										} else if (typeof value === 'number') {
											return value;
										} else {
											return (
												<Typography
													sx={{
														fontSize: '0.8rem',
														fontWeight: 400,
														color: '#838383',
														lineHeight: 1,
														marginTop: '6px',
													}}
												>
													Product
												</Typography>
											);
										}
									}}
									inputProps={{
										sx: {
											padding: 0.7,
											color: '#838383',
										},
									}}
									sx={{
										borderRadius: '3px',
										backgroundColor: '#ffffff',
										boxShadow: 'none',
										'.MuiOutlinedInput-notchedOutline': {
											border: 0,
										},
										'&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
											{
												border: 0,
											},
										'&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
											{
												border: 0,
											},
									}}
								>
									<MenuItem value={'jlg'}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>
						</Grid>
					</Grid>
				</Grid>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 1,
					overflow: 'auto',
					flex: 1,
					overFlow: 'hidden',
					position: 'relative',
				}}
			>
				<CollectTable />
			</Box>
		</Box>
	);
};

export default DI(CollectTab);
