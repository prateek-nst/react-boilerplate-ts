import { useState } from 'react';

import { Box, Divider, Input, Typography } from '@mui/material';

type Props = {
	denomination: number;
	setTotal: React.Dispatch<
		React.SetStateAction<{
			'2000': number;
			'500': number;
			'200': number;
			'100': number;
			'50': number;
			'20': number;
			'10': number;
			'5': number;
		}>
	>;
};

const ariaLabel = { 'aria-label': 'description' };

const CashDenominationCard: React.FC<Props> = ({ denomination, setTotal }) => {
	const [amount, setAmount] = useState<null | number>(null);
	const [input, setInput] = useState<string | null>(null);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (/^\d+$/.test(e.target.value) || e.target.value === '') {
			setInput(e.target.value);
			if (e.target.value === '') {
				setAmount(null);
				setTotal((prev) => {
					return { ...prev, [denomination]: 0 };
				});
			} else {
				setAmount(Number(e.target.value) * denomination);
				setTotal((prev) => {
					return {
						...prev,
						[denomination]: Number(e.target.value) * denomination,
					};
				});
			}
		} else {
			alert('please enter a valid amount');
		}
	};

	return (
		<Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Typography sx={{ flex: 1 }}>₹{denomination}</Typography>
				<Box
					sx={{
						flex: 1,
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Input
						placeholder="Count"
						value={input}
						inputProps={ariaLabel}
						onChange={handleChange}
						sx={{
							'.MuiInput-input': { textAlign: 'center' },
						}}
					/>
				</Box>
				{amount ? (
					<Typography
						sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}
					>
						₹{amount.toLocaleString()}/-
					</Typography>
				) : (
					<Typography sx={{ flex: 1 }}></Typography>
				)}
			</Box>
			<Divider sx={{ marginTop: 2 }} />
		</Box>
	);
};

export default CashDenominationCard;
