import { ComponentStory, ComponentMeta } from '@storybook/react';
import IcProjectsActive from '@assets/navbar/projects_active.svg';

export default {
	title: 'Assets/navbar/projectsActive',
	component: IcProjectsActive,
} as ComponentMeta<typeof IcProjectsActive>;

const Template: ComponentStory<typeof IcProjectsActive> = (args) => <IcProjectsActive {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
};
