import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type buttonVariants = 'filled' | 'stroke' | 'text';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	variant: buttonVariants;
}

export default Props;

export type {
	buttonVariants,
};
