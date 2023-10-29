'use client';

import { useState } from 'react';
import NavList from '../NavList';
import Social from '../Social';
import styles from './styles.module.scss';
import MenuIcon from '@mui/icons-material/Menu';
import classNames from 'classnames';
import CloseIcon from '@mui/icons-material/Close';

const MobileNav = (): JSX.Element | null => {
  const [open, setOpen] = useState(false);

  const handleNavToggle = () => setOpen((prev) => !prev);

  const classes = classNames(
    styles.MobileNav,
    open && styles.open,
  );

  return (
    <nav className={classes}>
      <button
        className={styles.mobileButton}
        onClick={() => handleNavToggle()}
        aria-label="Open Menu"
      >
        <MenuIcon />
      </button>
      <div
        className={styles.overlay}
        onClick={() => handleNavToggle()}
      />
      <div className={styles.drawer}>
        <div className={styles.menu}>
          <button
            className={styles.closeButton}
            onClick={() => handleNavToggle()}
            aria-label="Close Menu"
          >
            <CloseIcon />
          </button>
          <i className={`icon-clear ${styles.close}`} onClick={() => handleNavToggle()} />
          <NavList onClick={handleNavToggle} />
          <Social className={styles.social} />
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
