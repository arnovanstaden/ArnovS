import { useEffect, useState } from 'react';

const useScrollToElement = (): {
  scrollToElement: (id: string) => void
} => {
  const [id, setId] = useState('');

  useEffect(() => {
    if (!id) return;
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setId('');
    }
  }, [id]);

  const scrollToElement = (elId: string) => setId(elId);

  return { scrollToElement };
};

export default useScrollToElement;
