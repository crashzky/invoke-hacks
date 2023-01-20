import { buttonVariants } from './Button.props';

const COMMON_STYLES = 'rounded-2xl h-[58px] text-center text-BoldBodyText_16';

function getButtonStyles(variant: buttonVariants) {
	switch(variant) {
		case 'filled':
			return COMMON_STYLES + ' bg-primary text-white ';
		case 'stroke':
			return COMMON_STYLES + ' text-primary border-2 border-primary ';
		case 'text':
			return COMMON_STYLES + ' text-primary ';
	}
}


export default getButtonStyles;
