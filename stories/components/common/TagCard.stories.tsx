import { ComponentStory, ComponentMeta } from '@storybook/react';
import TagCard from '@components/common/TagCard';

export default {
	title: 'Components/Common/TagCard',
	component: TagCard,
} as ComponentMeta<typeof TagCard>;

const Template: ComponentStory<typeof TagCard> = (args) => <TagCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	tagName: 'tag',
	onDeleteTag: () => undefined,
};
