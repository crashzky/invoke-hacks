import { ComponentStory, ComponentMeta } from '@storybook/react';
import LikeIcon from '@assets/like.svg';

export default {
	title: 'Assets/Like',
	component: LikeIcon,
} as ComponentMeta<typeof LikeIcon>;

const Template: ComponentStory<typeof LikeIcon> = (args) => <LikeIcon {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
};
