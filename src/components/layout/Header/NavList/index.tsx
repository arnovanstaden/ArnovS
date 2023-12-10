'use client';

import useScrollToElement from '@hooks/ui';
import styles from './styles.module.scss';

const NavList = ({ onClick }: { onClick?: () => void }): JSX.Element => {
  const { scrollToElement } = useScrollToElement();

  const handleClick = (id: string) => {
    scrollToElement(id);
    if (onClick) onClick();
  };

  const items: {
    id: string,
    label: string,
  }[] = [{
    id: 'about',
    label: 'About',
  },
  {
    id: 'skills',
    label: 'Skills',
  },
  {
    id: 'experience',
    label: 'Experience',
  },
  {
    id: 'contact',
    label: 'Contact',
  }];

  return (
    <ul className={styles.NavList}>
      {items.map((item) => (
        <li key={item.id} onClick={() => handleClick(item.id)}>
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default NavList;
