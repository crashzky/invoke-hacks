import { ComponentStory, ComponentMeta } from '@storybook/react';
import RecIcon from '@assets/rec.svg';

export default {
	title: 'Assets/Rec',
	component: RecIcon,
} as ComponentMeta<typeof RecIcon>;

const Template: ComponentStory<typeof RecIcon> = (args) => <RecIcon {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
};
