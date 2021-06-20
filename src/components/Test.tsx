import classNames from 'classnames';

export type Props = {
  label: string;
  className: string;
};

export const Test = ({ label, className }: Props) => (
  <span className={classNames('text-xl font-bold text-blue-700', className)}>
    {label}
  </span>
);
