'use client';

import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

const TypingAnimation = (): JSX.Element => {
  const strings = [
    'Making Websites Load Faster Than a \'for\' Loop on Coffee',
    'Turning \'TypeError\' into \'TypeWonderful\'',
    'Crafting Web Magic, One \'let\' at a Time',
    'Making the Web Safer, One Line of Code (or Two) at a Time',
    'Optimizing Websites to Run as Smoothly as a Well-Refactored Function',
    'Turning Coffee into Code and Code into Smiles',
    'No Bugs Allowed – Only the Friendly \'console.log\' Kind',
    'Where \'const\' Commitment Meets Creative Code',
    'Serving Freshly Baked Websites with a Side of TypeScript',
    'Web Development: Because \'null\' and \'undefined\' Are Not an Option',
  ];
  const typingSpeed = 70;
  const deleteSpeed = 35;
  const displayDuration = 2000;

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
