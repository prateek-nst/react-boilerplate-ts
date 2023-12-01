import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import DepositeIcon from '../../../assets/svg/DepositCardIcon';

const CustomCardContent = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0.8rem;
  }
`);
interface DepositeCardProps {
	cardContent: string[];
}
const DepositeCard: React.FC<DepositeCardProps> = ({ cardContent }) => {
	const cardDetails = [
		'Cash with Me',
		'Cash with RO',
		'Cash deposited at CMS',
		'Cash Deposited at Bank Branch',
		'Total Cash Collection',
	];

	return (
		<div style={{ boxShadow: '0px 12px 42px -4px #0000001F' }}>
			<Card sx={{ minWidth: 275 }} elevation={0}>
				<CustomCardContent sx={{ padding: '0rem' }}>
					<Grid container direction="column" sx={{ padding: '0rem 2rem' }}>
						<Grid item sx={{ margin: '0.8rem 0.3rem 0.8rem 0rem' }}>
							<div style={{ display: 'flex', flexDirection: 'row' }}>
								<DepositeIcon />
								<Typography
									sx={{
										fontWeight: 700,
										fontSize: '0.9rem',
										paddingLeft: '0.5rem',
									}}
								>
									Deposit
								</Typography>
							</div>
						</Grid>
						<Grid
							item
							container
							direction="row"
							justifyContent={'space-between'}
						>
							{cardContent.map((item, index) => (
								<Grid
									item
									sx={{ paddingRight: '4rem' }}
									key={'grid' + index}
								>
									<Typography
										sx={{
											fontWeight: 700,
											color:
												index === 0 ? '#26922B' : '#000000',
											fontSize: '1.3rem',
											display: 'flex',
											lineHeight: 1,
											marginBottom: '0.4rem',
										}}
									>
										{item}
									</Typography>
									<Typography
										sx={{
											fontWeight: 400,
											color: '#A7A6A6',
											fontSize: '0.6rem',
										}}
									>
										{cardDetails[index]}
									</Typography>
								</Grid>
							))}
						</Grid>
					</Grid>
				</CustomCardContent>
			</Card>
		</div>
	);
};

export default DepositeCard;
