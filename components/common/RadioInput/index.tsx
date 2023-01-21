import Props from './RadioInput.props';

const RadioInput: React.FC<Props> = ({ className = '', items, errorMessage, ...props }) => {
	return (
		<>
			<div className={className + ' grid grid-flow-col gap-[6px]'}>
				{items.map((i, num) => (
					<div
						key={num}
						className={'border-[1px] rounded-2xl p-4 grid grid-cols-[25px_1fr] items-center gap-[10px]'
							+ (errorMessage ? ' border-red' : ' border-lightGrey')}
					>
						<input
							type='radio'
							className='custom-radio'
							id={i.id}
							value={i.id}
							{...props} />
						<label htmlFor={i.id} className='font-semibold cursor-pointer'>
							{i.label}
						</label>
					</div>
				))}
			</div>
			{errorMessage && (
				<p className='font-semibold text-sm text-red -mt-2 mb-0'>
					{errorMessage}
				</p>
			)}
		</>
	);
};

export default RadioInput;
