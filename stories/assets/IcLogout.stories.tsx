import { ComponentStory, ComponentMeta } from '@storybook/react';
import IcLogout from '@assets/ic_logout.svg';

export default {
	title: 'Assets/ic_logout',
	component: IcLogout,
} as ComponentMeta<typeof IcLogout>;

const Template: ComponentStory<typeof IcLogout> = (args) => <IcLogout {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
};
