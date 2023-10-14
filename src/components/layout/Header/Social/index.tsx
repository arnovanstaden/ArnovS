import styles from './styles.module.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';

const Social = (): JSX.Element => (
  <nav className={styles.Social}>
    <a href="https://github.com/arnovanstaden" target="blank" aria-label="GitHub">
      <GitHubIcon className={styles.icon} />
    </a>
    <a href="https://www.linkedin.com/in/arnovanstaden/" target="blank" aria-label="LinkedIn">
      <LinkedInIcon className={styles.icon} />
    </a>
    <a href="mailto:arno@arnovs.dev" aria-label="Email" className={styles.mail}>
      <SendIcon className={styles.icon} />
    </a>
  </nav>
);

export default Social;
