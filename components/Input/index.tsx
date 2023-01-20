import Props from './Input.props';

const Input: React.FC<Props> = ({ className = '', ...props }) => {
	return (
		<input
			className={className
				+ ` h-14 border-lightGrey border-[1px] rounded-2xl placeholder:text-darkGrey text-black outline-none
					placeholder:font-semibold px-4`}
			{...props} />
	);
};

export default Input;
