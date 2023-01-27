import { DetailedHTMLProps, HTMLAttributes } from 'react';

type reactionVariants = 'like' | 'dislike';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	imageUrl: string;
	userName: string;
	label: string;
	description: string;
	skills: string[];
	hobby: string[];
	lifeGuidelines: string;
	telegram?: string;
	reaction?: reactionVariants;
	withDrag?: boolean;
	onCardDrag?: (reaction: reactionVariants | undefined) => void;
	autoDrag?: reactionVariants;
}

export default Props;

export type {
	reactionVariants,
};
