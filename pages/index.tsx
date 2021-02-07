// Components
import Layout from "../components/Layout/Layout";
import Landing from "../components/Landing/Landing";
import Section from "../components/Section/Section";
import Skills from "../components/Skills/Skills";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Project from "../components/Project/Project";

// Styles, Icons, Fonts
import styles from '../styles/index.module.scss';

// Data
import devProjects from "../assets/data/projects-development.json";

export default function Home() {
  return (
    <Layout
      head={{
        title: "Arno van Staden",
        description: "I am a web developer"
      }}
    >
      <main className={styles.main}>
        <Landing />

        <Section light idProp="projects" heading="Featured Projects">
          <div className="project-grid">
            {devProjects.map((project, index) => (
              project.featured ? <Project {...project} key={index} /> : null
            ))}
          </div>
        </Section>

        <Section idProp="skills" heading="My Skills">
          <Skills />
        </Section>

        <Section light idProp="about" heading="About Me">
          <About />
        </Section>

        <Section idProp="contact" heading="Get in Touch">
          <Contact />
        </Section>
      </main>


    </Layout>
  )
}
