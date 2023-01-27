import { ComponentStory, ComponentMeta } from '@storybook/react';
import DislikeSmIcon from '@assets/dislikeSm.svg';

export default {
	title: 'Assets/DislikeSm',
	component: DislikeSmIcon,
} as ComponentMeta<typeof DislikeSmIcon>;

const Template: ComponentStory<typeof DislikeSmIcon> = (args) => <DislikeSmIcon {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
};
