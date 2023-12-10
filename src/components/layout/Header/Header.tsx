import MobileNav from './MobileNav';
import NavList from './NavList';
import ThemeToggle from './ThemeToggle';
import styles from './styles.module.scss';
import Link from 'next/link';

const Header = (): JSX.Element => (
  <header className={styles.header}>
    <Link href="/" className={styles.name}>
      <img className={styles.logo} src="/images/logos/logo-light.svg" alt="arnovs logo" width="24px" height="100%" />
      <p>
        <span>Arno </span>
        van Staden
      </p>
    </Link>
    <nav className={styles.desktopNav}>
      <NavList />
      <ThemeToggle />
    </nav>
    <MobileNav />
  </header>
);

export default Header;
