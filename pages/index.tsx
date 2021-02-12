import Link from "next/link";

// Components
import Layout from "../components/Layout/Layout";
import Landing from "../components/Landing/Landing";
import Section from "../components/Section/Section";
import Skills from "../components/Skills/Skills";
import About from "../components/About/About";
import Contact from '../components/Contact/Contact';
import Project from "../components/Project/Project";

// Styles, Icons, Fonts
import styles from '../styles/index.module.scss';

// Data
import projects from "../assets/data/projects.json";

export default function Home() {
  return (
    <Layout
      head={{
        title: "Arno van Staden",
        description: "I'm a front-end web developer from South Africa offering web development & design services."
      }}
      noFooter={true}
    >
      <main className={styles.main}>
        <Landing />

        <Section light
          idProp="projects"
          heading="Featured Projects"
          subheading="I don't like talking about what I can do, I prefer showing. Here are some of my featured projects."
        >
          <div className="project-grid">
            {projects.map((project, index) => (
              project.featured ? <Project {...project} key={index} /> : null
            ))}
          </div>
          <div className={styles.projectButtons}>
            <button className="button">
              <Link href="/projects">
                <a>View All My Work</a>
              </Link>
            </button>
          </div>
        </Section>

        <Section
          idProp="skills"
          heading="My Skills"
          subheading="Every project is a new story, yet some things stay the same. This is some of the tech I love using."
        >
          <Skills />
        </Section>

        <Section light
          idProp="about"
          heading="About Me"
          subheading="I'm more than just a techy, although I love everything techy."
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
