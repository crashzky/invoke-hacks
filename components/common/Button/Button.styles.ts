import { buttonColors, buttonVariants } from './Button.props';

const COMMON_STYLES = 'rounded-2xl h-[58px] text-center text-BoldBodyText_16';

function getButtonStyles(color: buttonColors, variant: buttonVariants): string {
	let bgColor = '';
	let borderColor = '';
	let textColor = '';

	switch(color) {
		case 'black':
			bgColor = 'bg-black';
			borderColor = 'border-black';
			textColor = 'text-black';
			break;
		case 'primary':
			bgColor = 'bg-primary';
			borderColor = 'border-primary';
			textColor = 'text-primary';
			break;
		case 'red':
			bgColor = 'bg-red';
			borderColor = 'border-red';
			textColor = 'text-red';
			break;
	}

	switch(variant) {
		case 'filled':
			return `${COMMON_STYLES} ${bgColor} text-white `;
		case 'stroke':
			return `${COMMON_STYLES} ${borderColor} border-2 `;
		case 'text':
			return `${COMMON_STYLES} ${textColor} `;
		case 'icon':
			return `${bgColor} p-1 rounded-lg inline-block `;
	}
}

export default getButtonStyles;
