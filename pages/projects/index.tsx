// Components
import Layout from './../../components/Layout/Layout';
import Project from "../../components/Project/Project";
import Section from "../../components/Section/Section";
import Contact from './../../components/Contact/Contact';

// Styles 
import styles from "../../styles/projects.module.scss";

// Data
import devProjects from "../../assets/data/projects.json";

export default function Projects() {

    return (
        <Layout
            head={{
                title: "Projects",
                description: "Projects Description",
            }}>

            <Section light>
                <div className={styles.types}>
                    <button className={styles.button}>
                        All
                    </button>
                    <button className={`${styles.button} ${styles.hollow}`}>
                        Web Applications
                    </button>
                    <button className={`${styles.button} ${styles.hollow}`}>
                        Websites
                    </button>
                    <button className={`${styles.button} ${styles.hollow}`}>
                        Design
                    </button>
                </div>
                <div className="project-grid">
                    {devProjects.map((project, index) => (
                        project.visible ? <Project light {...project} key={index} /> : null
                    ))}
                </div>
            </Section>

            <Section
                idProp="contact"
                heading="Get in Touch"
                subheading="If you're interested and would like to hear more about what makes me tick as a developer, please don't hesitate to get in touch."
            >
                <Contact />
            </Section>

        </Layout>
    )
}
