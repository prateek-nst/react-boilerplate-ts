import React, { ChangeEvent, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	InputAdornment,
	OutlinedInput,
	Stack,
	Typography,
} from '@mui/material';

import NewstreetLogo from '../../../assets/svg/NewStreetLogo';
import TextHeading from '../../../components/TextHeading';
import TextWithUnderline from '../../../components/TextWithUnderline';
// import { useAppState } from '@/store/useAppState';

import useLogin from '@/store/useLogin';
import DI from '@/hoc/DI';
// import useWso from '@/store/useWso';

interface LoginFormProps extends Props {
	id: string;
	name: string;
	age: number;
}

const LoginForm = (props: LoginFormProps) => {
	const [formData, setFormData] = useState({ userName: '', password: '' });
	const login = useLogin();

	// const navigate = useNavigate();

	// const { data } = useWso();
	// console.log(data);

	async function handleLogin() {
		login.mutate({
			userName: formData.userName,
			password: formData.password,
		});
	}

	if (login.isError) {
		props.logger.error(
			new Error(login.error.message),
			'user1',
			props.componentName,
		);
	}

	if (login.isSuccess && login.data.data) {
		props.logger.info(
			{ message: 'Login success' },
			'user1',
			props.componentName,
		);
		props.storage.setItem('accessToken', login.data.data?.accessToken);
	}

	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Box
				sx={{
					minHeight: '100vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					width: '40ch',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						marginRight: 'auto',
						marginBottom: '2rem',
					}}
				>
					<TextHeading text={'Login'} />
				</Box>
				<Stack direction={'column'} sx={{ gap: '3rem' }}>
					<Box>
						<Typography sx={{ fontSize: '1.3rem' }}>User ID</Typography>
						<FormControl
							sx={{
								width: '40ch',
							}}
							variant="outlined"
						>
							<OutlinedInput
								error={
									formData.userName == '' ||
									formData.password == ''
								}
								id="outlined-adornment-weight"
								startAdornment={
									<InputAdornment position="start">
										<PersonIcon fontSize="large" />
									</InputAdornment>
								}
								aria-describedby="outlined-weight-helper-text"
								inputProps={{
									'aria-label': 'Incorrect User ID',
								}}
								sx={{
									borderRadius: '0.5rem',
									height: '4rem',
									fontSize: '1.2rem',
								}}
								value={formData.userName}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setFormData((prev) => {
										return {
											...prev,
											userName: e.target.value,
										};
									})
								}
							/>
							<FormHelperText
								id="outlined-weight-helper-text"
								error
								sx={{ fontSize: '1rem' }}
							>
								Incorrect User ID
							</FormHelperText>
						</FormControl>
					</Box>

					<Box>
						<Typography sx={{ fontSize: '1.3rem' }}>Password</Typography>
						<FormControl sx={{ width: '40ch' }} variant="outlined">
							<OutlinedInput
								error={
									formData.userName == '' ||
									formData.password == ''
								}
								id="outlined-adornment-weight"
								startAdornment={
									<InputAdornment position="start">
										<LockIcon fontSize="large" />
									</InputAdornment>
								}
								aria-describedby="outlined-weight-helper-text"
								inputProps={{
									'aria-label': 'weight',
								}}
								sx={{
									borderRadius: '0.5rem',
									height: '4rem',
									fontSize: '1.2rem',
								}}
								value={formData.password}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setFormData((prev) => {
										return {
											...prev,
											password: e.target.value,
										};
									})
								}
							/>
							<FormHelperText
								id="outlined-weight-helper-text"
								error
								sx={{ fontSize: '1rem' }}
							>
								Incorrect Password
							</FormHelperText>
						</FormControl>
					</Box>

					<Button
						variant="contained"
						sx={{
							backgroundColor: '#E02C88',
							height: '4rem',
							fontSize: '1.3rem',
							textTransform: 'none',
							borderRadius: '1rem',
						}}
						disabled={formData.userName == '' || formData.password == ''}
						onClick={handleLogin}
					>
						SIGN IN
					</Button>

					<Box sx={{ display: 'flex', marginInline: 'auto' }}>
						<TextWithUnderline
							text={'forgot password?'}
							color={'#543900'}
						/>
					</Box>

					<Box sx={{ display: 'flex', marginInline: 'auto' }}>
						<NewstreetLogo />
					</Box>
				</Stack>
			</Box>
		</Box>
	);
};

export default DI(LoginForm);
