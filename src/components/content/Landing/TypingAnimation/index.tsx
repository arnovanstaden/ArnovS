'use client';

import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

const TypingAnimation = ({ strings }: { strings: string[] }): JSX.Element => {
  const typingSpeed = 80;
  const deleteSpeed = 50;
  const displayDuration = 5000;

  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isDeleting && currentText === strings[currentStringIndex]) {
      setTimeout(() => {
        setIsDeleting(true);
      }, displayDuration);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
    } else {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => isDeleting
          ? prevText.substring(0, prevText.length - 1)
          : prevText + strings[currentStringIndex][prevText.length],
        );
      }, isDeleting ? deleteSpeed : typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [currentText, isDeleting, strings, currentStringIndex, deleteSpeed, typingSpeed, displayDuration]);

  return <p className={styles.TypingAnimation}>{currentText}</p>;
};

export default TypingAnimation;
