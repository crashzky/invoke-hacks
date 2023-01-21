import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	tagName: string;
	onDeleteTag: () => void;
}

export default Props;
