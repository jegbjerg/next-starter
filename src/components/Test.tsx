import classNames from 'classnames';
import { ReactNode } from 'react';

export type Props = {
  content: ReactNode;
  className: string;
};

export const Test = ({ content, className }: Props) => (
  <span className={classNames('text-xl font-bold text-blue-700', className)}>
    {content}
  </span>
);
