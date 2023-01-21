import { ComponentStory, ComponentMeta } from '@storybook/react';
import IcCancel from '@assets/ic_cancel.svg';

export default {
	title: 'Assets/ic_cancel',
	component: IcCancel,
} as ComponentMeta<typeof IcCancel>;

const Template: ComponentStory<typeof IcCancel> = (args) => <IcCancel {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
};
