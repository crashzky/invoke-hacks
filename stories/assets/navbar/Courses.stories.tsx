import { ComponentStory, ComponentMeta } from '@storybook/react';
import IcCourses from '@assets/navbar/courses.svg';

export default {
	title: 'Assets/navbar/courses',
	component: IcCourses,
} as ComponentMeta<typeof IcCourses>;

const Template: ComponentStory<typeof IcCourses> = (args) => <IcCourses {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
};
