import { ComponentStory, ComponentMeta } from '@storybook/react';
import DKeyIcon from '@assets/dKey.svg';

export default {
	title: 'Assets/dKey',
	component: DKeyIcon,
} as ComponentMeta<typeof DKeyIcon>;

const Template: ComponentStory<typeof DKeyIcon> = (args) => <DKeyIcon {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
};
