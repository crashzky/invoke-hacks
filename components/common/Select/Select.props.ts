import { ReactNode } from 'react';

interface ISelectOption {
	value: string;
	label: string;
}

interface Props {
	errorMessage?: string;
	defaultInputValue?: string;
	defaultMenuIsOpen?: boolean;
	defaultValue?: ISelectOption;
	placeholder?: null | string | number | boolean;
	options?: ISelectOption[];
	openMenuOnClick?: boolean;
	openMenuOnFocus?: boolean;
	noOptionsMessage?: () => ReactNode;
	menuIsOpen?: boolean;
	maxMenuHeight?: number;
	minMenuHeight?: number;
	loadingMessage?: () => ReactNode;
	isSearchable?: boolean;
	isMulti?: boolean;
	isLoading?: boolean;
	isDisabled?: boolean;
	onChange?: (newValue: any) => void;
	onFocus?: (e: any) => void;
	onInputChange?: (newValue: string) => void;
	onKeyDown?: (e: any) => void;
	onMenuOpen?: () => void;
	onMenuClose?: () => void;
	onMenuScrollToTop?: (e: any) => void;
	onMenuScrollToBottom?: (e: any) => void;
	isLazyLoad?: boolean;
	value?: string;
    className?: string;
	results?: number;
}

export default Props;

export type {
	ISelectOption,
};
