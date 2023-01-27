import { useEffect, useState } from 'react';
import SwipeCard from '@components/tinder/SwipeCard';
import SelectButton from '@components/tinder/SelectButton';
import { reactionVariants } from '@components/tinder/SwipeCard/SwipeCard.props';

const MembersPage = (): JSX.Element => {
	const [active, setActive] = useState<reactionVariants>();
	const [drag, setDrag] = useState<reactionVariants>();

	useEffect(() => {
		if(typeof window !== 'undefined') {
			window.addEventListener('keypress', (e) => {
				switch(e.code) {
					case 'KeyA':
						setDrag('dislike');
						setActive('dislike');
						setTimeout(() => setActive(undefined), 300);
						break;
					case 'KeyD':
						setDrag('like');
						setActive('like');
						setTimeout(() => setActive(undefined), 300);
						break;
				}
			});
		}
	}, []);

	return (
		<div className='mt-12 grid grid-cols-[259px_1fr_259px] h-[490px]'>
			<SelectButton
				isActive={active === 'dislike'}
				variant='dislike'
				onClick={() => {
					setDrag('dislike');
					setActive('dislike');
					setTimeout(() => setActive(undefined), 300);
				}} />
			<div className='px-10'>
				<div className='relative'>
					<SwipeCard
						withDrag
						autoDrag={drag}
						onCardDrag={(reaction) => setActive(reaction)}
						imageUrl=''
						userName='Александр Исаков'
						label='Middle UX/UI Дизайнер'
						description={`Привет, я 3 года занимаюсь дизайном интерфейсов, получал звание
							лушего дизайнера на хакатоне “Вездекод”, побеждал в Tenderhack`}
						skills={['CustDev', 'JTBD', 'Research', 'UserFlow']}
						hobby={['спорт', 'йога', 'кино', 'футбол']}
						lifeGuidelines='Моя цель реализовать крутой стартап и создать семью.' />
				</div>
			</div>
			<SelectButton
				isActive={active === 'like'}
				variant='like'
				onClick={() => {
					setDrag('like');
					setActive('like');
					setTimeout(() => setActive(undefined), 300);
				}} />
		</div>
	);
};

export default MembersPage;
