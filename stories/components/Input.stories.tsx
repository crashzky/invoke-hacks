import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '@components/common/Input';

export default {
	title: 'Components/Input',
	component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	placeholder: 'Placeholder'
};
