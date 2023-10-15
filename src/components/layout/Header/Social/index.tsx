import styles from './styles.module.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Social = (): JSX.Element => (
  <nav className={styles.Social}>
    <a href="https://github.com/arnovanstaden" target="blank" aria-label="GitHub">
      <GitHubIcon />
    </a>
    <a href="https://www.linkedin.com/in/arnovanstaden/" target="blank" aria-label="LinkedIn">
      <LinkedInIcon />
    </a>
    <a href="mailto:arno@arnovs.dev" aria-label="Email" className={styles.mail} target="_blank">
      <EmailIcon />
    </a>
  </nav>
);

export default Social;
