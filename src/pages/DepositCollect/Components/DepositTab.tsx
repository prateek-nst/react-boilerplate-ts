/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';

import {
	Box,
	Button,
	FormControl,
	Grid,
	MenuItem,
	Select,
	Typography,
} from '@mui/material';

import CustomDrawer from '@/components/CustomDrawer.tsx';
import CustomTextfield from '@/components/CustomTextfield';
import DI from '@/hoc/DI.tsx';

import DepositCardView from './DepositCardView.tsx';
import DepositTable from './DepositTable.tsx';
import ViewDetailDialog from './ViewDetailDialog.tsx';

const content: string[] = [
	'₹ 50,000',
	'₹ 20,000',
	'₹ 50,000',
	'₹ 1,50,000',
	'₹ 1,00,000',
];

const DepositTab: React.FC = () => {
	const [state, setState] = useState(false);
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
			<DepositCardView cardContent={content} />
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
														fontSize: '0.7rem',
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
														fontSize: '0.7rem',
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
					<Grid
						item
						xs={2}
						sx={{ display: 'flex', justifyContent: 'flex-end' }}
					>
						<Button
							variant="contained"
							onClick={() => setState(true)}
							sx={{
								backgroundColor: '#01468E',
								borderRadius: '3px',
								fontSize: '0.6rem',
								padding: '0.5rem',
							}}
						>
							Download Slip
						</Button>
					</Grid>
				</Grid>
			</Box>
			<Box>
				<DepositTable />
				<CustomDrawer
					setState={setState}
					state={state}
					Component={ViewDetailDialog}
					props={{ id: 1 }}
				/>
			</Box>
		</Box>
	);
};

export default DI(DepositTab);
