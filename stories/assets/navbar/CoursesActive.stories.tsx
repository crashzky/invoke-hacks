import { ComponentStory, ComponentMeta } from '@storybook/react';
import IcCoursesActive from '@assets/navbar/courses_active.svg';

export default {
	title: 'Assets/navbar/coursesActive',
	component: IcCoursesActive,
} as ComponentMeta<typeof IcCoursesActive>;

const Template: ComponentStory<typeof IcCoursesActive> = (args) => <IcCoursesActive {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
};
