import { ComponentStory, ComponentMeta } from '@storybook/react';
import Logo from '@components/common/Logo';

export default {
	title: 'Components/Common/Logo',
	component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
};
