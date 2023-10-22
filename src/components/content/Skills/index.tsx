import styles from './styles.module.scss';

const Skills = (): JSX.Element | null => {
  const skills = [
    'HTML',
    'CSS',
    'SASS',
    'JavaScript',
    'TypeScript',
    'SQL',
    'GraphQL',
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

  const getIconPath = (skill: string) => `/images/icons/${skill.toLowerCase().replace(' ', '-')}.svg`;

  return (
    <div className={styles.Skills}>
      <ul className={styles.list}>
        {skills.map((skill) => (
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
