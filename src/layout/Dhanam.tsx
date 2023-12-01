import './Dhanam.scss';

import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

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
