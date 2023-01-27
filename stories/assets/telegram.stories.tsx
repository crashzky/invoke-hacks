import { ComponentStory, ComponentMeta } from '@storybook/react';
import Telegram from '@assets/telegram.svg';

export default {
	title: 'Assets/telegram',
	component: Telegram,
} as ComponentMeta<typeof Telegram>;

const Template: ComponentStory<typeof Telegram> = (args) => <Telegram {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
};
