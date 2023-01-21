import { ComponentStory, ComponentMeta } from '@storybook/react';
import IcPlus from '@assets/ic_plus.svg';

export default {
	title: 'Assets/ic_plus',
	component: IcPlus,
} as ComponentMeta<typeof IcPlus>;

const Template: ComponentStory<typeof IcPlus> = (args) => <IcPlus {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
};
