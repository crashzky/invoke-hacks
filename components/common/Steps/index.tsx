import Props from './Steps.props';

const Steps: React.FC<Props> = ({ className = '', steps, activeStep, ...props }) => {
	return (
		<div className={className + ' flex items-center gap-[18px]'} {...props}>
			{steps.map((i, num) => (
				<>
					<div key={num} className='grid grid-cols-[28px_1fr] gap-[10px] items-center'>
						<div className={'bg-lightGrey rounded-full pt-1 text-center font-bold '
							+ (num !== activeStep ? 'text-grey' : 'text-primary')}>
							{num + 1}
						</div>
						<p className={'text-BoldBodyText_14 ' + (num !== activeStep && 'text-grey')}>
							{i}
						</p>
					</div>
					{num !== steps.length - 1 && (
						<div className='w-9 border-t-2 border-lightGrey'></div>
					)}
				</>
			))}
		</div>
	);
};

export default Steps;
