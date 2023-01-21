import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface IRadioItem {
	label: string;
	id: string;
}

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	items: IRadioItem[];
	errorMessage?: string;
}

export default Props;
