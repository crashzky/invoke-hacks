import { ComponentStory, ComponentMeta } from '@storybook/react';
import IcStudentsActive from '@assets/navbar/students_active.svg';

export default {
	title: 'Assets/navbar/studentsActive',
	component: IcStudentsActive,
} as ComponentMeta<typeof IcStudentsActive>;

const Template: ComponentStory<typeof IcStudentsActive> = (args) => <IcStudentsActive {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
};
