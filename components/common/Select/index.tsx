import { useState } from 'react';
import ReactSelect from './import';
import Props from './Select.props';
import getStyles from './Select.styles';

const Select: React.FC<Props> = ({ onInputChange, isLazyLoad, onChange = () => undefined, dangerMessage, options, results, ...props }) => {
	const [lastTimeout, setLastTimeout] = useState<any>();
	const [searchValue, setSearchValue] = useState('');

	return (
		<ReactSelect
			options={results
					? options?.filter((i) => i.label.toLowerCase().startsWith(searchValue.toLowerCase()))?.slice(0, results)
					: options}
			styles={getStyles(!!dangerMessage)}
			onChange={(e) => {
				if(onInputChange && isLazyLoad) {
					clearTimeout(lastTimeout);

					const _timeout = setTimeout(() => onInputChange((e as any).value), 300);
					setLastTimeout(_timeout);
				}
				else if(onInputChange)
					onInputChange((e as any).value);
				
				onChange(e);
			}} 
			onInputChange={(newValue) => {
				setSearchValue(newValue);
				if(onInputChange && isLazyLoad) {
					clearTimeout(lastTimeout);

					const _timeout = setTimeout(() => onInputChange(newValue), 300);
					setLastTimeout(_timeout);
				}
				else if(onInputChange)
					onInputChange(newValue);
			}} 
			{...props} />
	);
};

export default Select;
