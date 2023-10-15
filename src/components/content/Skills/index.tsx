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
  ];

  const platforms = [
    'Firebase',
    'Google Cloud',
    'AWS',
    'Vercel',
    'Jira',
    'Figma',
  ];

  const getIconPath = (skill: string) => `/images/icons/${skill.toLowerCase().replace(' ', '-')}.svg`;

  return (
    <div className={styles.Skills}>
      <ul className={styles.list}>
        {langs.map((skill) => (
          <li className={styles.skill} key={skill}>
            <img src={getIconPath(skill)} alt={`${skill} icon`} />
            {skill}
          </li>
        ))}
      </ul>
      <ul className={styles.list}>
        {frameworksAndLibraries.map((skill) => (
          <li className={styles.skill} key={skill}>
            <img src={getIconPath(skill)} alt={`${skill} icon`} />
            {skill}
          </li>
        ))}
      </ul>
      <ul className={styles.list}>
        {platforms.map((skill) => (
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
