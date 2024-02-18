'use client';

import styles from './styles.module.scss';
import { useTheme } from '@context/theme';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const ThemeToggle = (): React.ReactElement | null => {
  const { theme, toggleTheme } = useTheme();
  const icon = theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />;

  return (
    <button
      onClick={toggleTheme}
      className={styles.ThemeToggle}
      aria-label="Theme Toggle"
    >
      {icon}
    </button>
  );
};

export default ThemeToggle;
