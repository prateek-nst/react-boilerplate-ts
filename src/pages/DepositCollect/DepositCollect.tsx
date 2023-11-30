import { Box, Button } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { signal } from '@preact/signals-react';

import DI from '@/hoc/DI.tsx';
import { useAppState } from '@/state/client/useAppState.tsx';

import CollectIcon from '../../assets/svg/CollectIcon.tsx';
import DepositIcon from '../../assets/svg/DepositIcon.tsx';
import CollectTab from './Components/CollectTab.tsx';
import DepositTab from './Components/DepositTab.tsx';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function CustomTabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			style={{ flex: 1, overflowY: 'auto' }}
			{...other}
		>
			{value === index && <Box sx={{ p: 1, height: '100%' }}>{children}</Box>}
		</div>
	);
}

export const DepositCollectTabValue = signal(1);

const DepositCollect = () => {
	// console.log(i);

	const { app } = useAppState();

	console.log(app);
	console.log(app.user);

	return (
		<Box
			sx={{
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Box
				sx={{
					p: 1,
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Box sx={{ flex: 1, display: 'flex', height: '2rem' }}>
					<Button
						disableRipple
						// variant="contained"
						sx={{
							boxShadow: 'none',
							padding: '0rem 1.2rem',
							marginRight: '1rem',
							color:
								DepositCollectTabValue.value === 0
									? '#FFFFFF'
									: '#A7A6A6',
							backgroundColor:
								DepositCollectTabValue.value === 0
									? '#01468E'
									: '#DDDDDD',
							textTransform: 'none',
							borderRadius: '0.2rem',
							'&:hover': {
								backgroundColor:
									DepositCollectTabValue.value === 0
										? '#01468E'
										: '#DDDDDD',
								color:
									DepositCollectTabValue.value === 0
										? '#FFFFFF'
										: '#A7A6A6',
							},
						}}
						onClick={() => (DepositCollectTabValue.value = 0)}
					>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-around',
								alignItems: 'center',
								gap: 1,
							}}
						>
							<CollectIcon
								fill={
									DepositCollectTabValue.value === 0
										? '#FFFFFF'
										: '#A7A6A6'
								}
							/>

							<p style={{ lineHeight: 1, fontSize: '0.8rem' }}>
								Collect
							</p>
						</Box>
					</Button>
					<Button
						variant="contained"
						disableRipple
						sx={{
							padding: '0rem 1.2rem',
							boxShadow: 'none',
							marginRight: '1rem',
							color:
								DepositCollectTabValue.value === 1
									? '#FFFFFF'
									: '#A7A6A6',
							backgroundColor:
								DepositCollectTabValue.value === 1
									? '#01468E'
									: '#DDDDDD',
							textTransform: 'none',
							borderRadius: '0.2rem',
							'&:hover': {
								backgroundColor:
									DepositCollectTabValue.value === 1
										? '#01468E'
										: '#DDDDDD',
								color:
									DepositCollectTabValue.value === 1
										? '#FFFFFF'
										: '#A7A6A6',
							},
						}}
						onClick={() => (DepositCollectTabValue.value = 1)}
					>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-around',
								alignItems: 'center',
								gap: 1,
							}}
						>
							<DepositIcon
								fill={
									DepositCollectTabValue.value === 1
										? '#FFFFFF'
										: '#A7A6A6'
								}
							/>

							<p style={{ lineHeight: 1, fontSize: '0.8rem' }}>
								Deposit
							</p>
						</Box>
					</Button>
				</Box>
				<Box
					sx={{
						display: 'flex',
						height: '2rem',
						justifyContent: 'flex-end',
					}}
				>
					<Box sx={{ backgroundColor: '#ffffff' }}>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DatePicker
								// defaultValue={new AdapterDayjs()}
								format="DD MMMM YYYY"
								sx={{
									'& .css-mcf0en-MuiInputBase-root-MuiOutlinedInput-root':
										{
											height: '2rem',
										},
									'& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input':
										{
											fontSize: '0.7rem',
										},
									'& .css-1yq5fb3-MuiButtonBase-root-MuiIconButton-root':
										{
											padding: '4px',
										},
									'& .css-1d3z3hw-MuiOutlinedInput-notchedOutline':
										{
											border: '0',
										},
									'& .css-i4bv87-MuiSvgIcon-root': {
										fill: '#A6A6A6',
										height: '1.3rem',
										width: '1.3rem',
									},
								}}
							/>
						</LocalizationProvider>
					</Box>
				</Box>
			</Box>
			<CustomTabPanel value={DepositCollectTabValue.value} index={0}>
				<CollectTab />
			</CustomTabPanel>
			<CustomTabPanel value={DepositCollectTabValue.value} index={1}>
				<DepositTab />
			</CustomTabPanel>
		</Box>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export default DI(DepositCollect);
