import { ComponentStory, ComponentMeta } from '@storybook/react';
import LikeSmIcon from '@assets/likeSm.svg';

export default {
	title: 'Assets/LikeSm',
	component: LikeSmIcon,
} as ComponentMeta<typeof LikeSmIcon>;

const Template: ComponentStory<typeof LikeSmIcon> = (args) => <LikeSmIcon {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
};
