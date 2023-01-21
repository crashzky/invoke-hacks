import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	routeBackTitle: string;
	onRouteBack: () => void;
}

export default Props;
