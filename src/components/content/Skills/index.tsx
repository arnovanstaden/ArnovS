'use client';

import { MutableRefObject, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

const skills = [
  'HTML',
  'CSS',
  'SASS',
  'JavaScript',
  'TypeScript',
  'SQL',
  'GraphQL',
  'REST',
  'JQuery',
  'React',
  'NextJS',
  'NodeJS',
  'Redux',
  'React Query',
  'StoryBook',
  'ExpressJS',
  'Material UI',
  'Jest',
  'GIT',
  'MongoDB',
  'Firebase',
  'Google Cloud',
  'AWS',
  'Vercel',
  'Jira',
  'Confluence',
  'Figma',
];

const Skills = (): JSX.Element | null => {
  const [searchTerm, setSearchTerm] = useState('');
  const skillsRef = useRef() as MutableRefObject<HTMLDivElement>;
  const getIconPath = (skill: string) => `/images/icons/${skill.toLowerCase().replace(' ', '-')}.svg`;
  const filteredSkills = skills.filter((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()));

  // Ensure the section height does not jump around when filtering skills
  useEffect(() => {
    const sectionHeight = skillsRef.current.clientHeight;
    skillsRef.current.style.minHeight = `${sectionHeight}px`;
  }, []);

  return (
    <div className={styles.Skills} ref={skillsRef}>
      <input
        className={styles.search}
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Looking for something specific?"
      />
      <ul className={styles.list}>
        {filteredSkills.map((skill) => (
          <li className={styles.skill} key={skill}>
            <img src={getIconPath(skill)} alt={`${skill} icon`} />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
