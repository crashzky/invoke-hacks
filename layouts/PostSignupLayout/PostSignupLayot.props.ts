import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	activeStep: number;
	onSkip: () => void;
}

export default Props;
