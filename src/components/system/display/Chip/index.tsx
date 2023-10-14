import classNames from 'classnames';
import styles from './styles.module.scss';

interface IProps {
  children: React.ReactNode;
  outlined?: boolean;
  className?: string;
}

const Chip = (props: IProps): JSX.Element | null => {
  const classes = classNames(
    styles.Chip,
    props.outlined && styles.outlined,
    props.className,
  );

  return (
    <div className={classes}>
      <span>{props.children}</span>
    </div>
  );
};

export default Chip;
