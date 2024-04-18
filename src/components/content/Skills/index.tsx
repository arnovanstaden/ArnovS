'use client';

import { MutableRefObject, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import CancelIcon from '@mui/icons-material/Cancel';

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
  'Next.js',
  'Node.js',
  'Astro',
  'React Query',
  'StoryBook',
  'Express.js',
  'Material UI',
  'Jest',
  'GIT',
  'MongoDB',
  'Firebase',
  'Supabase',
  'Google Cloud',
  'AWS',
  'Vercel',
  'Sanity',
  'Contentful',
  'Jira',
  'Confluence',
  'Figma',
];

const Skills = (): JSX.Element | null => {
  const [searchTerm, setSearchTerm] = useState('');
  const skillsRef = useRef() as MutableRefObject<HTMLDivElement>;
  const getIconPath = (skill: string) => `/images/icons/${skill.toLowerCase().replace(' ', '-')}.svg`;
  const filteredSkills = skills.filter((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Ensure the section height does not jump around when filtering skills
  useEffect(() => {
    const sectionHeight = skillsRef.current.clientHeight;
    skillsRef.current.style.minHeight = `${sectionHeight}px`;
  }, []);

  return (
    <div className={styles.Skills} ref={skillsRef}>
      <div className={styles.search}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Looking for something specific?"
        />
        {searchTerm && (
          <CancelIcon
            className={styles.clear}
            onClick={() => setSearchTerm('')}
          />
        )}
      </div>
      <ul className={styles.list}>
        {filteredSkills.map((skill) => (
          <li className={styles.skill} key={skill}>
            <img width={16} height={16} src={getIconPath(skill)} alt={`${skill} icon`} loading="lazy" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
