import MobileNav from './MobileNav';
import NavList from './NavList';
import Social from './Social';
import styles from './styles.module.scss';
import Link from 'next/link';

const Header = (): JSX.Element => (
  <header className={styles.header}>
    <Link href="/" className={styles.name}>
      <img className={styles.logo} src="/images/logos/logo-light.svg" alt="arnovs logo" width="24px" height="100%" />
      <span>Arno</span>
      {' '}
      van Staden
    </Link>
    <nav className={styles.nav}>
      <NavList />
    </nav>
    <Social />
    <MobileNav />
  </header>
);

export default Header;
