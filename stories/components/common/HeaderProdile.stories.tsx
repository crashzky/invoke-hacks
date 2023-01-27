import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeaderProfile from '@components/common/HeaderProfile';

export default {
	title: 'Components/Common/HeaderProfile',
	component: HeaderProfile,
} as ComponentMeta<typeof HeaderProfile>;

const Template: ComponentStory<typeof HeaderProfile> = (args) => <HeaderProfile {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
};
