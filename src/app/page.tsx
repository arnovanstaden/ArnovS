import About from '@components/content/About';
import Experience from '@components/content/Experience';
import Landing from '@components/content/Landing';
import Skills from '@components/content/Skills';
import Section from '@components/layout/Section';
import typingData from '@data/typings.json';

const HomePage = (): JSX.Element => (
  <main>
    <Landing />
    <Section
      light
      id="about"
      heading="About"
      typingAnimationStrings={typingData.about}
    >
      <About />
    </Section>

    <Section
      id="skills"
      heading="Skills"
      typingAnimationStrings={typingData.skills}
    >
      <Skills />
    </Section>

    <Section
      light
      id="experience"
      heading="Experience"
      typingAnimationStrings={typingData.experience}
    >
      <Experience />
    </Section>

  </main>
);

export default HomePage;
