import ClassNames from 'classnames';

import styles from './styles.module.scss';

interface IProps {
  children: React.ReactNode,
  icon?: React.ReactNode,
  outlined?: boolean;
}

const Button = ({ children, icon, outlined }: IProps): JSX.Element => {
  const classes = ClassNames(
    styles.Button,
    outlined ? styles.outlined : null,
  );

  return (
    <button className={classes}>
      {icon || null}
      {children}
    </button>
  );
};

export default Button;
