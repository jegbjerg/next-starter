import classNames from 'classnames';
import Image, { ImageProps } from 'next/image';

export type Props = {
  label: string;
  image: ImageProps;
  className: string;
};

export const Test = ({ label, image, className }: Props) => (
  <>
    <span className={classNames('text-xl font-bold text-blue-700', className)}>
      {label}
    </span>
    <Image {...image} />
  </>
);
