import { ComponentStory, ComponentMeta } from '@storybook/react';
import DislikeIcon from '@assets/dislike.svg';

export default {
	title: 'Assets/Dislike',
	component: DislikeIcon,
} as ComponentMeta<typeof DislikeIcon>;

const Template: ComponentStory<typeof DislikeIcon> = (args) => <DislikeIcon {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
};
