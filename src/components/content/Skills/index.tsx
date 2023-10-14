import styles from './styles.module.scss';

const Skills = (): JSX.Element | null => {
  const langs = [
    'HTML',
    'CSS',
    'SASS',
    'JavaScript',
    'TypeScript',
    'SQL',
    'GraphQL',
    'JQuery',
  ];

  const frameworksAndLibraries = [
    'NodeJS',
    'React',
    'NextJS',
    'ExpressJS',
    'Material UI',
    'Jest',
    'GIT',
    'MongoDB',
    'JAMstack',
  ];

  const platforms = [
    'Firebase',
    'Google Cloud',
    'AWS',
    'Vercel',
    'Jira',
    'Figma',
  ];

  return (
    <div className={styles.Skills}>
      <ul className={styles.list}>
        {langs.map((skill) => (
          <li className={styles.skill} key={skill}>
            {skill}
          </li>
        ))}
      </ul>
      <ul className={styles.list}>
        {frameworksAndLibraries.map((skill) => (
          <li className={styles.skill} key={skill}>
            {skill}
          </li>
        ))}
      </ul>
      <ul className={styles.list}>
        {platforms.map((skill) => (
          <li className={styles.skill} key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
