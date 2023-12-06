import { Box, Grid } from '@mui/material';

import LoginLogo from '../../assets/svg/loginlogo.svg';
import LoginForm from './components/LoginForm';
import useWso from '@/store/useWso';
import DI from '@/hoc/DI';

const Login = (props: Props) => {
	console.log(props);
	const wso = useWso();

	if (wso.isError) {
		console.log(wso.error);
		props.logger.error(wso.error, 'user1', 'login1');
	}

	if (wso.isSuccess) {
		props.storage.setItem('wsoToken', wso.data.access_token);
		props.logger.info({ message: 'wsotoken fetched' }, 'user1', 'login1');
	}

	return (
		<Grid container sx={{ width: '100%' }}>
			<Grid item xs={7}>
				<Box
					sx={{
						width: '100%',
						height: '100%',
						backgroundImage: `url(${LoginLogo})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				></Box>
			</Grid>
			<Grid item xs={5}>
				<LoginForm id="100" name="aa" age={10} />
			</Grid>
		</Grid>
	);
};

export default DI(Login);
