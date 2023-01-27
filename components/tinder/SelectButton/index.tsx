import Props from './SelectButton.props';

import LikeIcon from '@assets/like.svg';
import DislikeIcon from '@assets/dislike.svg';

import AKeyIcon from '@assets/aKey.svg';
import DKeyIcon from '@assets/dKey.svg';

const SelectButton: React.FC<Props> = ({ className = '', variant, isActive, ...props }) => {	
	function getBorder() {
		if(!isActive)
			return 'border-lightGrey';
		else {
			switch(variant) {
				case 'like':
					return 'border-green';
				case 'dislike':
					return 'border-red';
			}
		}
	}

	return (
		<button
			className={className
				+ ` border-[1px] ${getBorder()} rounded-[20px] h-full flex justify-center items-center flex-col gap-4
					transition-all duration-200`}
			{...props}
		>
			{variant === 'like' ? (
				<>
					<LikeIcon />
					<DKeyIcon />
				</>
			) : ( 
				<>
					<DislikeIcon />
					<AKeyIcon />
				</>
			)}	
		</button>
	);
};

export default SelectButton;
