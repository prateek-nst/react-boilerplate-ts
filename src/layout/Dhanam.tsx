import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import './Dhanam.scss';

const Dhanam = () => {
	return (
		<Box className="app-container">
			<Box className="header"></Box>
			<Box className="sidebar"></Box>
			<Box className="main-content">
				<Outlet />
			</Box>
		</Box>
	);
};

export default Dhanam;
