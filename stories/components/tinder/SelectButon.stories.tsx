import { ComponentStory, ComponentMeta } from '@storybook/react';
import SelectButton from '@components/tinder/SelectButton';

export default {
	title: 'Components/Tinder/SelectButton',
	component: SelectButton,
} as ComponentMeta<typeof SelectButton>;

const Template: ComponentStory<typeof SelectButton> = (args) => <SelectButton {...args} />;

export const Like = Template.bind({});
export const DisLike = Template.bind({});

Like.args = {
	variant: 'like',
};

DisLike.args = {
	variant: 'dislike',
};
