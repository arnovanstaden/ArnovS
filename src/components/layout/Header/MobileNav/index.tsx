'use client';

import NavList from '../NavList';
import Social from '../Social';
import styles from './styles.module.scss';

const MobileNav = (): JSX.Element | null => {
  const handleNavToggle = () => {
    const menu = document.querySelector(`.${styles.mobileNav}`)!;
    if (menu.classList.contains(styles.open)) {
      menu.classList.remove(styles.open);
      document.body.classList.remove(styles.noscroll);
    } else {
      menu.classList.add(styles.open);
      document.body.classList.add(styles.noscroll);
    }
  };

  return (
    <div className={styles.MobileNav}>
      <button className={styles.mobileButton} onClick={() => handleNavToggle()}>
        <i className="icon-menu" />
      </button>
      <div className={styles.mobileNav}>
        <div className={styles.notNav} onClick={() => handleNavToggle()} />
        <div className={styles.menu}>
          <i className={`icon-clear ${styles.close}`} onClick={() => handleNavToggle()} />
          <NavList onClick={handleNavToggle} />
          <Social />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
