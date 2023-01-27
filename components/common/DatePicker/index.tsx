import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useState } from 'react';
import { Calendar } from 'react-date-range';
import Props from './DatePicker.props';

const DatePicker: React.FC<Props> = ({ className = '', value, errorMessage, placeholder, onChange }) => {
	const [showCalendar, setShowCalendar] = useState(false);

	function getBorder() {
		if(showCalendar)
			return 'border-primary';
		else if(errorMessage)
			return 'border-red';
		else
			return 'border-lightGrey';
	}
	
	return (
		<>
			<div className={className + ' relative'}>
				<button
					type='button'
					className={'h-14 px-4 border-[1px] rounded-2xl w-full ' + getBorder()}
					onClick={() => setShowCalendar((prev) => !prev)}
				>
					<p className={'font-semibold text-darkGrey transition-all duration-100 text-start '
						+ (value ? ' text-xs pt-[10px]' : 'pt-0')}
					>
						{placeholder}
					</p>
					<p className='font-medium text-start'>
						{value && format(value, 'dd.MM.yyyy')}
					</p>
				</button>
				{showCalendar && (
					<Calendar
						className='absolute right-0 top-10 z-10'
						color='#336BEA'
						locale={ru}
						onChange={(date) => {
							setShowCalendar(false);
							onChange(date);
						}}
						date={value} />
				)}
			</div>
			{errorMessage && (
				<p className='font-semibold text-sm text-red -mt-2 mb-0'>
					{errorMessage}
				</p>
			)}
		</>
	);
};

export default DatePicker;
