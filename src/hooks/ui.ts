const useScrollToElement = (): {
  scrollToElement: (id: string) => void
} => {
  const scrollToElement = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return { scrollToElement };
};

export default useScrollToElement;
