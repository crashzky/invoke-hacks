interface Props {
	className?: string;
	onChange: (date: Date) => void;
	value?: Date;
	errorMessage?: string;
	placeholder: string;
}

export default Props;
