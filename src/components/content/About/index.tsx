/* eslint-disable react/jsx-no-comment-textnodes */
import Chip from '@components/system/display/Chip';
import styles from './styles.module.scss';
import Interests from './Interests';

const About = (): JSX.Element | null => (
  <div className={styles.About}>
    <div className={styles.text}>
      <Chip>Overview</Chip>
      <p>The best things in life are JavaScript, travelling and coffee; with a strong cup of coffee having an index of 0.</p>

      <p>Growing up exposed to the golden era of Windows 98 Home Edition, I fell in love with computers, the internet and everything in its orbit. The dial-up sound was my life's theme-song during my childhood years.</p>

      <p>After university, I indulged my ever-present wanderlust and embarked on an expedition across South East Asia "living my best life" and "finding myself".
        <span>/* Insert the usual hipster saying like learning adaptability, open-mindedness and communication skills here. Remember to delete later! */</span>
      </p>

      <p>In 2018 I founded <a href="https://webdacity.dev" target="blank">Webdacity</a>, a web design &amp; development studio. Since then I've had roaring success creating awesome websites, web applications and crafting brand identities for a lengthy array of clients. I have also been voted as the funniest guy in my workplace of one every year since. Because I can apparently do everything in the IT sphere [according to everyone that's not in the industry], I'm also an expert at resetting modems and getting printers to work.</p>

      <p>In my fleeting spare time, I enjoy playing console games, diving into the rabbit hole of cats on the internet and helping my mom adjust the settings on her phone. Oh, and building awesome digital products that deliver real intrinsic value to its users.</p>

      <p><span>Disclaimer: I believe tabs are superior to spaces [especially when used on a mechanical keyboard in the presence of others]. I'm fiercely loyal and will never leave a friend behind, hence my preference for  <span>"</span>  over  <span>'</span>.</span></p>
    </div>
    <div className={styles.extra}>
      <div className={styles.block}>
        <Chip>Stats</Chip>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span>05+</span>
            <p>Years <br /> Experience</p>
          </div>
          <div className={styles.stat}>
            <span>60+</span>
            <p>Projects <br /> Completed</p>
          </div>
          <div className={styles.stat}>
            <span>5k+</span>
            <p>Commits <br />on GitHub</p>
          </div>
        </div>
      </div>
      <div className={styles.block}>
        <Chip>Languages</Chip>
        <ul className={styles.languages}>
          <li>
            <span />
            English <span>- Native</span>
          </li>
          <li>
            <span />
            Afrikaans <span>- Native</span>
          </li>
          <li>
            <span />
            German <span>- B1(ish)</span>
          </li>
        </ul>
      </div>
      <div className={styles.block}>
        <Chip>Interests</Chip>
        <Interests />
      </div>
    </div>
  </div>
);

export default About;
