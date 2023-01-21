import { ComponentStory, ComponentMeta } from '@storybook/react';
import IcTeamsActive from '@assets/navbar/teams_active.svg';

export default {
	title: 'Assets/navbar/teamsActive',
	component: IcTeamsActive,
} as ComponentMeta<typeof IcTeamsActive>;

const Template: ComponentStory<typeof IcTeamsActive> = (args) => <IcTeamsActive {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
};
