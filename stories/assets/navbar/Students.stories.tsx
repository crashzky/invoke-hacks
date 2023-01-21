import { ComponentStory, ComponentMeta } from '@storybook/react';
import IcStudents from '@assets/navbar/students.svg';

export default {
	title: 'Assets/navbar/students',
	component: IcStudents,
} as ComponentMeta<typeof IcStudents>;

const Template: ComponentStory<typeof IcStudents> = (args) => <IcStudents {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
};
