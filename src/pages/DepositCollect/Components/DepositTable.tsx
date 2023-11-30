/* eslint-disable react-refresh/only-export-components */
import { Grid, Typography } from '@mui/material/';

import DI from '@/hoc/DI';

// import { sampledata } from './SampleData';
import DepositRow from './DepositRow';

const DepositTable = (): React.ReactNode => {
	return (
		<div style={{ width: '100%', height: '100%' }}>
			<Grid container>
				<Grid container item>
					<div
						style={{
							backgroundColor: '#ffffff',
							padding: '0.7rem 0rem',
							width: '100%',
							boxShadow: '0px 4px 4px 0px #00000012',
						}}
					>
						<Grid
							container
							sx={{ paddingLeft: '1%' }}
							alignItems={'center'}
						>
							<Grid item xs={2.3}>
								<Typography
									sx={{
										fontWeight: 600,
										fontSize: '0.7rem',
										lineHeight: 1,
										color: '#838383',
									}}
								>
									Relationship Office
								</Typography>
							</Grid>
							<Grid item xs={2.3}>
								<Typography
									sx={{
										fontWeight: 600,
										fontSize: '0.7rem',
										lineHeight: 1,
										color: '#838383',
									}}
								>
									Bank Product
								</Typography>
							</Grid>
							<Grid item xs={2.3}>
								<Typography
									sx={{
										fontWeight: 600,
										fontSize: '0.7rem',
										lineHeight: 1,
										color: '#838383',
									}}
								>
									Collection File ID
								</Typography>
							</Grid>
							<Grid item xs={2.3}>
								<Typography
									sx={{
										fontWeight: 600,
										fontSize: '0.7rem',
										lineHeight: 1,
										color: '#838383',
									}}
								>
									Cash Received
								</Typography>
							</Grid>
							<Grid item xs={2.3}>
								<Typography
									sx={{
										fontWeight: 600,
										fontSize: '0.7rem',
										lineHeight: 1,
										color: '#838383',
									}}
								>
									Deposite Status
								</Typography>
							</Grid>
							<Grid item> </Grid>
						</Grid>
					</div>
				</Grid>
				<Grid container item>
					<DepositRow />
					<DepositRow />
					<DepositRow />
					<DepositRow />
					<DepositRow />
				</Grid>
			</Grid>
		</div>
	);
};

export default DI(DepositTable);
