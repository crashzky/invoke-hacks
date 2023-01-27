import Button from '../Button';
import Input from '../Input';
import Props from './TagsPeeker.props';
import PlusIcon from '@assets/ic_plus.svg';
import { useState } from 'react';
import TagCard from '../TagCard';

const TagsPicker: React.FC<Props> = ({ tags, setTags, placeholder, onDeleteTag, ...props }) => {
	const [inputValue, setInputValue] = useState('');

	return (
		<div {...props}>
			<div className='flex gap-2'>
				<Input 
					placeholder={placeholder}
					className='w-full' 
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)} />

				<Button
					color='black' 
					variant='icon' 
					className='w-16 items-center justify-center flex rounded-[16px]'
					onClick={() => {
						if (inputValue) {
							setTags(inputValue);
							setInputValue('');
						}
					}}
				>
					<PlusIcon className='stroke-white' />
				</Button>
			</div>

			<div className={'flex flex-wrap gap-3 ' + (tags.length ? 'mt-3' : '')}>
				{tags.map((tag, num) => (
					<TagCard 
						key={num} 
						onDeleteTag={() => onDeleteTag(num)}
						tagName={tag} />
				))}
			</div>
		</div>
	);
};

export default TagsPicker;
