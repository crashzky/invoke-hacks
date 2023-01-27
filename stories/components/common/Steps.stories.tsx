import { ComponentStory, ComponentMeta } from '@storybook/react';
import Steps from '@components/common/Steps';

export default {
	title: 'Components/Common/Steps',
	component: Steps,
} as ComponentMeta<typeof Steps>;

const Template: ComponentStory<typeof Steps> = (args) => <Steps {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	steps: ['step 1', 'step 2', 'step 3'],
	activeStep: 0,
	onChangeStep: () => undefined,
};
