import Container from '@components/system/layout/Container';
import styles from './styles.module.scss';
import Button from '@components/system/Input/Button';
import Chip from '@components/system/display/Chip';
import TypingAnimation from './TypingAnimation';
import Image from 'next/image';
import Social from '@components/layout/Header/Social';
import typingData from '@data/typings.json';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';

const Landing = (): JSX.Element | null => (
  <section className={styles.Landing}>
    <Container>
      <div className={styles.grid}>
        <div className={styles.image}>
          <Image
            src="/images/landing.png"
            alt="My profile"
            width={600}
            height={600}
            priority
            quality={100}
          />
        </div>
        <div className={styles.content}>
          <Chip>Front End Engineer</Chip>
          <h1 className={styles.name}>Hello, I'm Arno van Staden.</h1>
          <TypingAnimation strings={typingData.landing} />
          <div className={styles.info}>
            <Chip outlined>Status</Chip>
            <p>Open to Work.</p>
          </div>
          <div className={styles.info}>
            <Chip outlined>Location</Chip>
            <p>Berlin | München | Remote (Germany)</p>
          </div>
          <div className={styles.buttons}>
            <a href="mailto:arno@arnovs.dev" className={styles.mail} target="_blank">
              <Button aria-label="Let's Talk">
                <EmailIcon className={styles.icon} />
                Let's Talk
              </Button>
            </a>
            <a href="/CV - Arno van Staden - 2023.pdf" target="_blank">
              <Button outlined>
                <DescriptionIcon className={styles.icon} />
                View my CV
              </Button>
            </a>
          </div>
          <Social className={styles.social} />
        </div>
      </div>
    </Container>
  </section>
);

export default Landing;
