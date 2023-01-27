import { ComponentStory, ComponentMeta } from '@storybook/react';
import SwipeCard from '@components/tinder/SwipeCard';

export default {
	title: 'Components/Tinder/SwipeCard',
	component: SwipeCard,
} as ComponentMeta<typeof SwipeCard>;

const Template: ComponentStory<typeof SwipeCard> = (args) => <SwipeCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	imageUrl: '',
	userName: 'Александр Исаков',
	label: 'Middle UX/UI Дизайнер',
	description: `Привет, я 3 года занимаюсь дизайном интерфейсов, получал звание
		лушего дизайнера на хакатоне “Вездекод”, побеждал в Tenderhack`,
	skills: ['CustDev', 'JTBD', 'Research', 'UserFlow'],
	hobby: ['спорт', 'йога', 'кино', 'футбол'],
	lifeGuidelines: 'Моя цель реализовать крутой стартап и создать семью.',
};
