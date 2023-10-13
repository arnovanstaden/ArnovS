import ClassNames from 'classnames';

import styles from './styles.module.scss';

interface IProps {
  children: string,
  icon?: React.ReactNode,
  hollow?: boolean;
}

const Button = ({ children, icon, hollow }: IProps): JSX.Element => {
  const classes = ClassNames(
    styles.Button,
    hollow ? styles.hollow : null,
  );

  return (
    <button className={classes}>
      {icon || null}
      {children}
    </button>
  );
};

export default Button;
