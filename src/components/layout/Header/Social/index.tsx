import styles from './styles.module.scss';

const Social = (): JSX.Element => (
  <ul className={styles.Social}>
    <li>
      <a href="https://github.com/arnovanstaden" target="blank" aria-label="GitHub">
        <i className="icon-github" />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/arnovanstaden/" target="blank" aria-label="LinkedIn">
        <i className="icon-linkedin" />
      </a>
    </li>
    <li className={styles.mail}>
      <a href="mailto:arno@arnovs.dev" aria-label="Email">
        <i className="icon-paper-plane" />
      </a>
    </li>
  </ul>
);

export default Social;
