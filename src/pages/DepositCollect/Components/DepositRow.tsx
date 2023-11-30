import { Grid, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

import IconicCard from '@/components/IconicCard';
import DI from '@/hoc/DI';

// import DxbLogo from "../../../assets/svg/DxbLogo";
import BMicon from '../../../assets/svg/BmIcon';
import FederalLogo from '../../../assets/svg/FederalLogo';
import Pending from '../../../assets/svg/PendingStatus';
import IconAndTitle from '../../../components/IconAndTitle';

const DepositRow: React.FC = () => {
	// console.log(i);
	return (
		<>
			<div
				style={{
					backgroundColor: '#ffffff',
					padding: '0.5rem 0rem',
					width: '100%',
					boxShadow: '0px 2px 2px 0px #00000012',
					marginTop: '0.3rem',
				}}
			>
				<Grid container sx={{ paddingLeft: '1%' }} alignItems={'center'}>
					<Grid item xs={2.3}>
						<IconicCard title="raja" number="1123234323" />
					</Grid>
					<Grid item xs={2.3}>
						<IconAndTitle Image={FederalLogo} Title="JLG" />
					</Grid>

					<Grid item xs={2.3}>
						<Typography sx={{ fontWeight: 600, fontSize: '0.8rem' }}>
							13131311313431
						</Typography>
					</Grid>
					<Grid item xs={2.3}>
						<IconAndTitle Image={BMicon} Title="10,000" />
					</Grid>
					<Grid item xs={2.3}>
						<IconAndTitle Image={Pending} Title="pending" />
					</Grid>
					<Grid item>
						<Checkbox
							sx={{
								'&.Mui-checked': {
									color: '#F19F00',
								},
							}}
						/>
					</Grid>
				</Grid>
			</div>
		</>
	);
};

export default DI(DepositRow);
