import { MutableRefObject, useRef, useState } from 'react';
import Props from './Input.props';

const Input: React.FC<Props> = ({ className = '', errorMessage, placeholder, value, onFocus = () => undefined,
	onBlur = () => undefined, ...props }) => {
	const [isFocused, setIsFocused] = useState(false);

	const inputRef = useRef() as MutableRefObject<HTMLInputElement>; 

	return (
		<>
			<div
				className={className + ' h-14 px-4 border-[1px] rounded-2xl ' + (errorMessage ? 'border-red' : 'border-lightGrey')}
				onClick={() => {
					setIsFocused(true);
					inputRef.current?.click();
					inputRef.current?.focus();
				}}
			>
				<p className={'font-semibold text-darkGrey transition-all duration-100 ' + (isFocused || value ? ' text-xs pt-[10px]' : 'pt-4')}>
					{placeholder}
				</p>
				<input
					ref={inputRef}
					onFocus={(e) => {
						setIsFocused(true);
						onFocus(e);
					}}
					onBlur={(e) => {
						setIsFocused(false);
						onBlur(e);
					}}
					value={value}
					className={className + ' text-black outline-none bg-transparent'}
					{...props} />
			</div>
			{errorMessage && (
				<p className='font-semibold text-sm text-red -mt-2 mb-0'>
					{errorMessage}
				</p>
			)}
		</>
	);
};

export default Input;
