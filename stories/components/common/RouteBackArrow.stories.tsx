import { ComponentStory, ComponentMeta } from '@storybook/react';
import RouteBackArrow from '@components/common/RouteBackArrow';

export default {
	title: 'Components/Common/RouteBackArrow',
	component: RouteBackArrow,
} as ComponentMeta<typeof RouteBackArrow>;

const Template: ComponentStory<typeof RouteBackArrow> = (args) => <RouteBackArrow {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	routeBackTitle: 'back',
	onRouteBack: () => undefined,
};
