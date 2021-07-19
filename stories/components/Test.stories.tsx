import { Meta, Story } from '@storybook/react';
import { Props, Test } from '~/components/Test';
import hjh from './hjh-hot-pink.jpg';
import Image from 'next/image';

const meta: Meta = {
  title: 'Components/Test',
  component: Test,
};
export default meta;

const Template: Story<Props> = (args) => <Test {...args} />;

export const Basic: Story<Props> = Template.bind({});
Basic.args = {
  content: 'Foobar',
  className: 'pt-8',
};

export const WithImage: Story<Props> = Template.bind({});
WithImage.args = {
  content: <Image src={hjh} layout="fill" />,
  className: 'pt-8',
};
