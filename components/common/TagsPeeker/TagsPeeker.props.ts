import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	tags: string[];
	setTags: (newTag: string) => void;
	onDeleteTag: (tagId: number) => void;
}

export default Props;
