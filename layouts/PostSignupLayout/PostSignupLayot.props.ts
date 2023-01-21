import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	activeStep: number;
	onSkip: () => void;
	onRouteBack: () => void;
}

export default Props;
