'use client';

import { useTheme } from '@context/theme';

const Logo = ({ size = 32 }: { size?: number }): React.ReactElement | null => {
  const { theme } = useTheme();
  const src = theme === 'dark' ? '/images/logos/logo-light.svg' : '/images/logos/logo-dark.svg';
  return (<img src={src} alt="arnovs logo" width={size} height={size} />
  );
};

export default Logo;
