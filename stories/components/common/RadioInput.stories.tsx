import { ComponentStory, ComponentMeta } from '@storybook/react';
import RadioInput from '@components/common/RadioInput';

export default {
	title: 'Components/Common/RadioInput',
	component: RadioInput,
} as ComponentMeta<typeof RadioInput>;

const Template: ComponentStory<typeof RadioInput> = (args) => <RadioInput {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	className: 'w-[420px]',
	name: 'userType',
	items: [
		{
			id: 'user',
			label: 'Ученик',
		},
		{
			id: 'company',
			label: 'Компания',
		},
	]
};
