import { ComponentStory, ComponentMeta } from '@storybook/react';
import IcProjects from '@assets/navbar/projects.svg';

export default {
	title: 'Assets/navbar/projects',
	component: IcProjects,
} as ComponentMeta<typeof IcProjects>;

const Template: ComponentStory<typeof IcProjects> = (args) => <IcProjects {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
};
