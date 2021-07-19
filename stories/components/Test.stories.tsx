import { Meta, Story } from '@storybook/react';
import { Props, Test } from '~/components/Test';
import hjh from './hjh-hot-pink.jpg';

const meta: Meta = {
  title: 'Components/Test',
  component: Test,
};
export default meta;

const Template: Story<Props> = (args) => <Test {...args} />;

export const Basic: Story<Props> = Template.bind({});
Basic.args = {
  label: 'Foobar',
  className: 'pt-8',
};

export const WithImage: Story<Props> = Template.bind({});
WithImage.args = {
  ...Basic.args,
  image: { src: hjh, layout: 'fill' },
};
