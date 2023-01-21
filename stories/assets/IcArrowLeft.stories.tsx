import { ComponentStory, ComponentMeta } from '@storybook/react';
import IcArrowLeft from '@assets/ic_arrowleft.svg';

export default {
	title: 'Assets/ic_arrowleft',
	component: IcArrowLeft,
} as ComponentMeta<typeof IcArrowLeft>;

const Template: ComponentStory<typeof IcArrowLeft> = (args) => <IcArrowLeft {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
};
