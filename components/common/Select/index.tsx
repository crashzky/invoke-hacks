import { useState } from 'react';
import ReactSelect from './import';
import Props from './Select.props';

const Select: React.FC<Props> = ({ onInputChange, isLazyLoad, onChange = () => undefined, ...props }) => {
	const [lastTimeout, setLastTimeout] = useState<any>();

	return (
		<ReactSelect
			styles={{

			}}
			onChange={(e) => {
				if(onInputChange && isLazyLoad) {
					clearTimeout(lastTimeout);

					const _timeout = setTimeout(() => onInputChange((e as any).value), 500);
					setLastTimeout(_timeout);
				}
				else if(onInputChange)
					onInputChange((e as any).value);
				
				onChange(e);
			}} 
			onInputChange={(newValue) => {
				if(onInputChange && isLazyLoad) {
					clearTimeout(lastTimeout);

					const _timeout = setTimeout(() => onInputChange(newValue), 500);
					setLastTimeout(_timeout);
				}
				else if(onInputChange)
					onInputChange(newValue);
			}} 
			{...props} />
	);
};

export default Select;
