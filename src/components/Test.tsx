import classNames from 'classnames';
import Image, { ImageProps } from 'next/image';
import Link, { LinkProps } from 'next/link';

export type Props = {
  label: string;
  image?: ImageProps;
  link?: React.PropsWithChildren<LinkProps>;
  className: string;
};

export const Test = ({ label, image, link, className }: Props) => (
  <>
    <span className={classNames('text-xl font-bold text-blue-700', className)}>
      {label}
    </span>
    {image && <Image {...image} />}
    <p>{link && <Link {...link} />}</p>
  </>
);
