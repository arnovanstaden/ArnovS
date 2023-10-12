import Button from '@components/system/Input/Button';
import styles from './page.module.scss';
import Link from 'next/link';

const NotFoundPage = (): JSX.Element => (
  <section className={styles.NotFoundPage}>
    <div className={styles.text}>
      <h1>404 | Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <div className={styles.buttons}>
        <Link href="/">
          <Button>
            Go Back
          </Button>
        </Link>
      </div>
    </div>

    <img className={styles.logo} src="/images/logos/logo-light.svg" alt="" />
  </section>
);

export default NotFoundPage;
