import { StylesConfig } from 'react-select';

function getStyles(isDanger: boolean): StylesConfig {
	function getBorder(isFocused: boolean) {
		if(isFocused)
			return '1px solid #336BEA';
		else if(isDanger)
			return '1px solid #FF0066';
		else
			return '1px solid #EEEEEE';
	}

	return {
		control: (provided, state) => ({
			...provided,
			height: '58px',
			cursor: 'pointer',
			borderRadius: '16px',
			border: getBorder(state.isFocused),
			borderColor: 'none',
			boxShadow: 'none',
			'&:hover': {
				borderColor: 'none',
			},
		}),
		valueContainer: (provided) => ({
			...provided,
			padding: '0 0px',
		}),
		input: (provided) => ({
			...provided,
			fontSize: '16px',
			padding: '0px 18px',
			margin: '0',
		}),
		placeholder: (provided) => ({
			...provided,
			padding: '0 16px',
			fontSize: '16px',
			fontWeight: 600,
			color: '#8C888A',
		}),
		indicatorSeparator: () => ({
			display: 'none',
		}),
		loadingIndicator: () => ({
			display: 'none',
		}),
		menu: (provided) => ({
			...provided,
			borderRadius: '15px',
			marginTop: '10px',
			boxShadow: 'none',
			border: '1px solid #EEEEEE',
			padding: '0 15px',
		}),
		menuList: (provided) => ({
			...provided,
			borderRadius: '12px',
		}),
		option: (provided, state) => ({
			...provided,
			cursor: 'pointer',
			boxShadow: '',
			backgroundColor: state.isSelected ? '#F9F9F9' : 'transparent',
			borderRadius: 16,
			color: 'black',
			padding: '14px 12px',
			'&:active': {
				backgroundColor: 'transparent',
			},
		}),
		singleValue: (provided) => ({
			...provided,
			padding: '0 16px',
		}),
	};
}

export default getStyles;
