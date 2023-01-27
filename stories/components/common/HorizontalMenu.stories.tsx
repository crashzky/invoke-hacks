import { ComponentStory, ComponentMeta } from '@storybook/react';
import HorizontalMenu from '@components/common/HorizontalMenu';

export default {
	title: 'Components/Common/HorizontalMenu',
	component: HorizontalMenu,
} as ComponentMeta<typeof HorizontalMenu>;

const Template: ComponentStory<typeof HorizontalMenu> = (args) => <HorizontalMenu {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	items: [
		{
			label: 'label 1',
			link: '/',
		},
		{
			label: 'label 2',
			link: '/2',
		},
		{
			label: 'label 2',
			link: '/3',
		},
	],
};
