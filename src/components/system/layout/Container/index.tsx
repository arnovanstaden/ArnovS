import styles from './styles.module.scss';

const Container = ({ children }: { children: React.ReactNode }): JSX.Element | null => (
  <div className={styles.Container}>
    {children}
  </div>
);
export default Container;
