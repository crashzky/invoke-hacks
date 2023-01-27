import HorizontalMenu from '@/components/common/HorizontalMenu';
import SwipeCard from '@/components/tinder/SwipeCard';
import MainLayout from '@/layouts/MainLayout';

const MembersMatchesPage = (): JSX.Element => {
	return (
		<MainLayout>
			<div className='px-28 pt-8'>
				<HorizontalMenu items={[
					{
						label: 'Подбор участников',
						link: '/members',
					},
					{
						label: 'Подбор участников',
						link: '/members/matches',
					},
					{
						label: 'История просмотрва',
						link: '/members/history',
					},
				]} />
				<div className='mt-7 flex flex-wrap gap-4'>
					<SwipeCard
						className='w-[390px]'
						imageUrl=''
						userName='Александр Исаков'
						label='Middle UX/UI Дизайнер'
						description={`Привет, я 3 года занимаюсь дизайном интерфейсов, получал звание
							лушего дизайнера на хакатоне “Вездекод”, побеждал в Tenderhack`}
						skills={['CustDev', 'JTBD', 'Research', 'UserFlow']}
						hobby={['спорт', 'йога', 'кино', 'футбол']}
						lifeGuidelines='Моя цель реализовать крутой стартап и создать семью.'
						telegram='crashzy' />
					<SwipeCard
						className='w-[390px]'
						imageUrl=''
						userName='Александр Исаков'
						label='Middle UX/UI Дизайнер'
						description={`Привет, я 3 года занимаюсь дизайном интерфейсов, получал звание
							лушего дизайнера на хакатоне “Вездекод”, побеждал в Tenderhack`}
						skills={['CustDev', 'JTBD', 'Research', 'UserFlow']}
						hobby={['спорт', 'йога', 'кино', 'футбол']}
						lifeGuidelines='Моя цель реализовать крутой стартап и создать семью.'
						telegram='crashzy' />
					<SwipeCard
						className='w-[390px]'
						imageUrl=''
						userName='Александр Исаков'
						label='Middle UX/UI Дизайнер'
						description={`Привет, я 3 года занимаюсь дизайном интерфейсов, получал звание
							лушего дизайнера на хакатоне “Вездекод”, побеждал в Tenderhack`}
						skills={['CustDev', 'JTBD', 'Research', 'UserFlow']}
						hobby={['спорт', 'йога', 'кино', 'футбол']}
						lifeGuidelines='Моя цель реализовать крутой стартап и создать семью.'
						telegram='crashzy' />
				</div>
			</div>
		</MainLayout>
	);
};

export default MembersMatchesPage;
