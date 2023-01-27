import { useEffect } from 'react';
import Props from './SwipeCard.props';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';

import LikeIcon from '@assets/likeSm.svg';
import DislikeIcon from '@assets/dislikeSm.svg';
import TelegramIcon from '@assets/telegram.svg';

const SwipeCard: React.FC<Props> = ({ className = '', imageUrl, userName, label, description, skills, hobby, lifeGuidelines,
	telegram, reaction, withDrag, onCardDrag = () => undefined, autoDrag, ...props }) => {
	const x = useMotionValue(0);
	const rotate= useTransform(x, [-200, 200], [-50, 50]);
	const opacity = useTransform(
		x,
		[-200, -150, 0, 150, 200],
		[0, 1, 1, 1, 0]
	);
	const animControls = useAnimation();

	useEffect(() => {
		if(autoDrag === 'like')
			animControls.start({ x: 200 });
		else if(autoDrag === 'dislike')
			animControls.start({ x: -200 });
	}, [autoDrag]);

	return (
		<motion.div
			drag={withDrag ? 'x' : false}
			animate={animControls}
			style={{
				x,
				rotate,
				opacity,
			}}
			onDrag={(e, info) => {
				if(info.offset.x < 0)
					onCardDrag('dislike');
				else 
					onCardDrag('like');
			}}
			dragConstraints={{ left: -300, right: 300 }}
			onDragEnd={(e, info) => {
				onCardDrag(undefined);

				if (Math.abs(info.offset.x) <= 100)
					animControls.start({ x: 0 });
				else
					animControls.start({ x: info.offset.x < 0 ? -200 : 200 });
			}}
		>
			<article
				className={className
					+ ` bg-white border-[1px] border-lightGrey p-5 rounded-2xl
					shadow-[5px_5px_20px_rgba(204,204,204,0.08)] grid gap-4`}
				{...props}
			>
				<div className='flex justify-between'>
					<div className='w-[60px] h-[60px] rounded-full bg-slate-400'>

					</div>
					{reaction === 'like' && (
						<LikeIcon />
					)}
					{reaction === 'dislike' && (
						<DislikeIcon />
					)}
				</div>
				<div>
					<h2 className='text-BoldBodyText_18 mb-[3px]'>
						{userName}
					</h2>
					<p className='text-BodyText_12 text-primary'>
						{label}
					</p>
				</div>
				<p className='text-BodyText_12 text-darkGrey'>
					{description}
				</p>
				<p className='text-BodyText_12 text-darkGrey'>
					<span className='text-primary'>
						Скиллы:
					</span>
					{' '}
					{skills.reduce((prev, curr) => prev + ', ' + curr)}
				</p>
				<p className='text-BodyText_12 text-darkGrey'>
					<span className='text-primary'>
						Хобби:
					</span>
					{' '}
					{hobby.reduce((prev, curr) => prev + ', ' + curr)}
				</p>
				<p className='text-BodyText_12 text-darkGrey'>
					<span className='text-primary'>
						Жизненные ориентиры:
					</span>
					{' '}
					{lifeGuidelines}
				</p>
				{telegram && (
					<div className='grid grid-cols-[26px_1fr] gap-3 items-center'>
						<div className={`h-[26px] w-[26px] flex justify-center items-center
							rounded-md border-[1px] border-lightGrey`}
						>
							<TelegramIcon />
						</div>
						<p className='text-BodyText_12 text-primary'>
							@
							{telegram}
						</p>
					</div>
				)}
			</article>
		</motion.div>
	);
};

export default SwipeCard;
