import About from '@components/content/About';
import Landing from '@components/content/Landing';
import Skills from '@components/content/Skills';
import Section from '@components/layout/Section';

const HomePage = (): JSX.Element => (
  <main>
    <Landing />
    <Section
      light
      id="about"
      heading="About"
      subheading="I'm more than just a techie, although I love everything techie."
    >
      <About />
    </Section>

    <Section
      id="skills"
      heading="Skills"
      subheading="Every project is a new story, yet some things stay the same. This is just some of the ever-growing list of tech I love using."
    >
      <Skills />
    </Section>

    <Section
      light
      id="experience"
      heading="Experience"
      subheading="Every project is a new story, yet some things stay the same. This is just some of the ever-growing list of tech I love using."
    >
      <br />
    </Section>

    <Section
      id="projects"
      heading="Projects"
      subheading="Talk is cheap and I prefer putting my code where my keyboard is. Here are some of my featured projects."
    >
      <br />
    </Section>
  </main>
);

export default HomePage;
