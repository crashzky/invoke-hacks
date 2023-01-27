import { ComponentStory, ComponentMeta } from '@storybook/react';
import TagsPicker from '@components/common/TagsPicker';

export default {
	title: 'Components/Common/TagsPicker',
	component: TagsPicker,
} as ComponentMeta<typeof TagsPicker>;

const Template: ComponentStory<typeof TagsPicker> = (args) => <TagsPicker {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	tags: ['tag', 'tag 2', 'tag 3'],
	setTags: () => undefined,
	onDeleteTag: () => undefined,
};
