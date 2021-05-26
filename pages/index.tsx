// Components
import Layout from "../components/Layout/Layout";
import Landing from "../components/Landing/Landing";
import Section from "../components/Section/Section";
import Skills from "../components/Skills/Skills";
import About from "../components/About/About";
import Contact from '../components/Contact/Contact';
import Project from "../components/Project/Project";
import Button from "../components/Library/Button/Button"

// Styles, Icons, Fonts
import styles from '../styles/index.module.scss';

// Data
import projects from "../assets/data/projects.json";

export default function Home() {
  return (
    <Layout
      head={{
        title: "Arno van Staden | Web Developer",
        description: "South African Front End Web Developer & Designer. I design and build bespoke web applications and websites to help clients grow their business.",
        canonical: "/"
      }}
      noFooter={true}
    >
      <main className={styles.main}>
        <Landing />

        <Section light
          idProp="projects"
          heading="Featured Projects"
          subheading='Talk is cheap and I prefer putting my code where my keyboard is. Here are some of my featured projects.'
        >
          <div className="project-grid">
            {projects.map((project, index) => (
              project.featured ? <Project {...project} key={index} /> : null
            ))}
          </div>
          <div className={styles.projectButtons}>
            <Button link="/projects">
              View All My Work
            </Button>
          </div>
        </Section>

        <Section
          idProp="skills"
          heading="My Skills"
          subheading="Every project is a new story, yet some things stay the same. This is just some of the ever-growing list of tech I love using."
        >
          <Skills />
        </Section>

        <Section light
          idProp="about"
          heading="About Me"
          subheading="I'm more than just a techie, although I love everything techie."
        >
          <About />
        </Section>

        <Section
          idProp="contact"
          heading="Get in Touch"
          subheading="If you're interested and would like to hear more about what makes me tick as a developer, please don't hesitate to get in touch."
        >
          <Contact />
        </Section>
      </main>


    </Layout>
  )
}
