import Props from './Input.props';

const Input: React.FC<Props> = ({ className = '', errorMessage, ...props }) => {
	return (
		<>
			<input
				className={className
					+ ` h-14 border-[1px] rounded-2xl placeholder:text-darkGrey text-black outline-none
						placeholder:font-semibold px-4 `
					+ (errorMessage ? 'border-red' : 'border-lightGrey')}
				{...props} />
			{errorMessage && (
				<p className='font-semibold text-sm text-red -mt-2 mb-0'>
					{errorMessage}
				</p>
			)}
		</>
	);
};

export default Input;
