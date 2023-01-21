import { ComponentStory, ComponentMeta } from '@storybook/react';
import IcTeams from '@assets/navbar/teams.svg';

export default {
	title: 'Assets/navbar/teams',
	component: IcTeams,
} as ComponentMeta<typeof IcTeams>;

const Template: ComponentStory<typeof IcTeams> = (args) => <IcTeams {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
};
