import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

// import { useAppState } from '@/state/client/useAppState';
// import { selectLoader } from '../../redux/selector';
// import { showLoader } from '../../redux/slice';
import GlobalLoader from './GlobalLoader';
import LocalLoader from './LocalLoader';

import './_globalLoader.scss';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'none',
	p: 4,
	outline: 'none',
};

function CustomLoader({ loaderType = 'globalLoader' }) {
	// const { app, setLoading } = useAppState();
	// const dispatch = useDispatch();
	// const loaderState = useSelector(selectLoader);

	const handleClose = () => {
		// setLoading(false);
	};

	// React.useEffect(() => {
	// 	const handleEscKey = (event) => {
	// 		if (event.keyCode === 'Escape' || event.key === 'Backspace') {
	// 			if (loaderState?.loaderSkippable) {
	// 				dispatch(showLoader());
	// 			}
	// 		} else {
	// 			event.preventDefault();
	// 		}
	// 	};

	// 	if (loaderState?.showLoader) {
	// 		document.addEventListener('keydown', handleEscKey);
	// 	}

	// 	return () => {
	// 		document.removeEventListener('keydown', handleEscKey);
	// 	};
	// }, [dispatch, loaderState]);

	return (
		<div>
			<Modal
				open={false}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					{loaderType === 'globalLoader' ? (
						<GlobalLoader />
					) : (
						<LocalLoader />
					)}
				</Box>
			</Modal>
		</div>
	);
}

export default CustomLoader;
