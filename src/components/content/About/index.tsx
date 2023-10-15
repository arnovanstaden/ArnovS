/* eslint-disable react/jsx-no-comment-textnodes */
import Chip from '@components/system/display/Chip';
import styles from './styles.module.scss';
import Interests from './Interests';

const About = (): JSX.Element | null => (
  <div className={styles.About}>
    <div className={styles.text}>
      <Chip>Overview</Chip>
      <p>
        So, my top three things in life? Easy:
        <br /> 1. Fiddling around with JavaScript,
        <br />  2. Hitting the road and exploring new spots, and
        <br /> 3. That first cup of coffee in the morning
      </p>

      <p>
        I got hooked on computers with the good ol' Windows 98. Remember the sound of dial-up internet? That was basically my childhood's theme song. Good times.
      </p>

      <p>
        When I’m not glued to the screen, I’m either leveling up in some console game, falling into endless cat video loops online, or being the 24/7 tech support for my mom’s phone. But even during my downtime, part of my brain is always dreaming up cool digital stuff that people would love to use.
      </p>

      <p>
        Another thing about me? I'm that guy who turns to code for even the smallest hitches in life. Forgot someone's birthday one too many times? Yeah, I built a web app for that. It's the joy of tinkering and coming up with nifty digital solutions to those everyday “oops” moments that keeps the dev fire alive in me.
      </p>

      <p>
        But hey, it’s not all about coding. It’s the laughs, the challenges, and those endless debates about the tiniest details. You in?
      </p>
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
