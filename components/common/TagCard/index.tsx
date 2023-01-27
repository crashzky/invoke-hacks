import Props from './TagCard.props';
import CrossIcon from '@assets/ic_cancel.svg';

const TagCard: React.FC<Props> = ({ tagName, onDeleteTag, ...props }) => {
	return (
		<div {...props} className='px-3 py-1 rounded-lg inline-flex border-[1px] border-lightGrey border- gap-3 items-center'>
			<p>
				{tagName}
			</p>
			<button onClick={onDeleteTag}>
				<CrossIcon />
			</button>
		</div>
	);
};

export default TagCard;
