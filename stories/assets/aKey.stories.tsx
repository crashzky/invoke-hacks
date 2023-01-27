import { ComponentStory, ComponentMeta } from '@storybook/react';
import AKeyIcon from '@assets/aKey.svg';

export default {
	title: 'Assets/aKey',
	component: AKeyIcon,
} as ComponentMeta<typeof AKeyIcon>;

const Template: ComponentStory<typeof AKeyIcon> = (args) => <AKeyIcon {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
};
