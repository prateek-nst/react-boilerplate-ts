import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
const CustomField = styled(TextField)`
	background-color: #ffffff;
	border-radius: 3px;
	padding: 0;
	& .MuiInput-underline:after {
		border-bottom-color: #ffffff;
	}

	& .MuiOutlinedInput-root {
		& fieldset {
			border-color: #ffffff;
			border-width: 0;
		}

		&:hover fieldset {
			border-color: #ffffff;
			border-width: 0;
		}

		&.Mui-focused fieldset {
			border-color: #ffffff;
			border-width: 0;
		}
	}
`;

const CustomTextfield: React.FC = () => {
	return (
		<CustomField
			fullWidth
			placeholder="Relationship Officer Name"
			inputProps={{
				sx: {
					padding: 0.7,

					color: '#838383',
					'&::placeholder': {
						fontSize: '0.7rem',
					},
				},
			}}
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						<SearchIcon />
					</InputAdornment>
				),
			}}
		/>
	);
};

export default CustomTextfield;
