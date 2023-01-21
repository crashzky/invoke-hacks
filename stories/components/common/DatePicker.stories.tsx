import { ComponentStory, ComponentMeta } from '@storybook/react';
import DatePicker from '@components/common/DatePicker';

export default {
	title: 'Components/Common/DatePicker',
	component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => <DatePicker {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	className: 'w-[300px]',
};
