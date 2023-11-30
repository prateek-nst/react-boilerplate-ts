import { Box, Grid } from '@mui/material';

import LoginLogo from '../../assets/svg/loginlogo.svg';
import LoginForm from './components/LoginForm';

const Login = () => {
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
				<LoginForm />
			</Grid>
		</Grid>
	);
};

export default Login;
