// Components
import Layout from './../../components/Layout/Layout';
import Project from "../../components/Project/Project";
import Section from "../../components/Section/Section";

// Styles 
// import styles from "../styles/projects.module.scss"

// Data
import devProjects from "../../assets/data/projects-development.json";

export default function Projects() {

    return (
        <Layout
            head={{
                title: "Projects",
                description: "Projects Description",
            }}>
            <Section>
                <div className="project-grid">
                    {devProjects.map((project, index) => (
                        project.visible ? <Project {...project} key={index} /> : null
                    ))}
                </div>
            </Section>
        </Layout>
    )
}
