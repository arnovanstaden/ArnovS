// Components
import Layout from "../components/Layout/Layout";
import Landing from "../components/Landing/Landing";
import Section from "../components/Section/Section";
import Skills from "../components/Skills/Skills";
import About from "../components/About/About";

// Styles, Icons, Fonts
import styles from '../styles/index.module.scss';

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

        <Section light idProp="projects" heading="My Projects">

        </Section>

        <Section idProp="skills" heading="My Skills">
          <Skills />
        </Section>

        <Section light idProp="about" heading="About Me">
          <About />
        </Section>

        <Section idProp="contact" heading="Contact Me">

        </Section>
      </main>


    </Layout>
  )
}
