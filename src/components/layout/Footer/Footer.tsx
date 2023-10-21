import Section from '../Section';
import styles from './styles.module.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import typingData from '@data/typings.json';

const Footer = (): JSX.Element => (
  <Section
    id="contact"
    heading="Get in Touch"
    typingAnimationStrings={typingData.contact}
    contentClassName={styles.Footer}
    component="footer"
  // light
  >
    <a href="mailto:arno@arnovs.dev" className={styles.mail} target="_blank">
      <EmailIcon />
      arno@arnovs.dev
    </a>
    <div className={styles.social}>
      <a href="https://github.com/arnovanstaden" target="_blank">
        <GitHubIcon />
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/arnovanstaden/" target="_blank">
        <LinkedInIcon />
        LinkedIn
      </a>
      <a href="https://arnovs.medium.com" target="_blank">
        <img src="/images/icons/medium.svg" alt="Medium" />
        Medium
      </a>
    </div>
  </Section>
);

export default Footer;
