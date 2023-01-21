import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '@components/common/Button';

export default {
	title: 'Components/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	className: 'w-[300px]',
	children: 'Button',	
	variant: 'filled',
};
