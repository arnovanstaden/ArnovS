import classNames from 'classnames';
import styles from './styles.module.scss';

interface IProps {
  children: React.ReactNode;
  outlined?: boolean;
}

const Chip = (props: IProps): JSX.Element | null => (
  <div className={classNames(styles.Chip, props.outlined && styles.outlined)}>
    <span>{props.children}</span>
  </div>
);

export default Chip;
