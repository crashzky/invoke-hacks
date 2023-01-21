import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type buttonVariants = 'filled' | 'stroke' | 'text' | 'icon';
type buttonColors = 'primary' | 'black' | 'red';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	variant: buttonVariants;
	color: buttonColors;
}

export default Props;

export type {
	buttonVariants,
	buttonColors,
};
