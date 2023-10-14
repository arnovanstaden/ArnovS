import Container from '@components/system/layout/Container';
import styles from './styles.module.scss';
import Button from '@components/system/Input/Button';
import Link from 'next/link';
import Chip from '@components/system/display/Chip';
import TypingAnimation from './TypingAnimation';

const Landing = (): JSX.Element | null => (
  <section className={styles.Landing}>
    <Container>
      <div className={styles.grid}>
        <div className={styles.image}>
          ok
        </div>
        <div className={styles.content}>
          <Chip>Front End Developer</Chip>
          <h1 className={styles.name}>Hello, I'm Arno van Staden.</h1>
          <TypingAnimation />
          <div className={styles.info}>
            <Chip outlined>Status</Chip>
            <p>Open to Work.</p>
          </div>
          <div className={styles.info}>
            <Chip outlined>Location</Chip>
            <p>Berlin | München | Remote</p>
          </div>
          <div className={styles.buttons}>
            <Link href="/projects">
              <Button>
                View My Work
              </Button>
            </Link>
            <Link href="/#contact">
              <Button outlined>
                Let's Talk
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default Landing;
