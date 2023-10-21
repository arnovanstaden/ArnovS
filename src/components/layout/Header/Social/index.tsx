import styles from './styles.module.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import classNames from 'classnames';

const Social = ({ className }: { className?: string }): JSX.Element => (
  <nav className={classNames(styles.Social, className)}>
    <a href="https://github.com/arnovanstaden" target="blank" aria-label="GitHub">
      <GitHubIcon />
    </a>
    <a href="https://www.linkedin.com/in/arnovanstaden/" target="blank" aria-label="LinkedIn">
      <LinkedInIcon />
    </a>
  </nav>
);

export default Social;
