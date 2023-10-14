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
      heading="About Me"
      subheading="I'm more than just a techie, although I love everything techie."
    >
      <About />
    </Section>

    <Section
      id="skills"
      heading="My Skills"
      subheading="Every project is a new story, yet some things stay the same. This is just some of the ever-growing list of tech I love using."
    >
      <Skills />
    </Section>

    <Section
      light
      id="experience"
      heading="Commit History"
      subheading="Every project is a new story, yet some things stay the same. This is just some of the ever-growing list of tech I love using."
    >
      <br />
    </Section>

    <Section
      id="projects"
      heading="Projects"
      subheading="Talk is cheap and I prefer putting my code where my keyboard is. Here are some of my featured projects."
    >
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe eveniet similique quos a illum assumenda, maiores ducimus ab adipisci distinctio tenetur nam ipsam porro, quisquam consequatur explicabo, quo veritatis impedit repudiandae quod architecto expedita mollitia. Qui asperiores saepe dicta ex quos illo? Magnam accusamus id inventore at hic magni eum.</p>
    </Section>
  </main>
);

export default HomePage;
