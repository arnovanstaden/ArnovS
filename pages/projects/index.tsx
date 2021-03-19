import { useState } from 'react';
import * as FilterFunctions from "../../utils/projects";

// Components
import Layout from './../../components/Layout/Layout';
import Project from "../../components/Project/Project";
import Section from "../../components/Section/Section";
import Contact from '../../components/Contact/Contact';

// Styles 
import styles from "../../styles/projects.module.scss";

// Data
import projects from "../../assets/data/projects.json";

export default function Projects() {
    const [filter, setFilter] = useState("All");

    // Get All Project Filters
    const projectFilters = FilterFunctions.getProjectFilters(projects);

    const updateFilter = (item: string) => {
        setFilter(item);
    }

    const handleFilterClick = (item: string, index: number) => {
        FilterFunctions.handleClasses(styles, index);
        updateFilter(item);
    }

    const ProjectsGrid = (): JSX.Element => {
        return (
            <>
                {projects.map((project, index) => (
                    project.visible && (filter === "All" || project.category === filter)
                        ?
                        <Project light {...project} key={index} />
                        : null
                ))}
            </>
        )
    }

    return (
        <Layout
            head={{
                title: "Projects | Arno van Staden",
                description: "My work is a testament to my skill. Here are some of my featured web development projects.",
                canonical: "/projects"
            }}
            noFooter={true}
        >

            <Section light
                heading="Featured Projects"
                subheading="My work is a testament to my skill. Here are some of my featured web development projects."
            >
                <div className={styles.filters}>
                    {projectFilters.map((item, index) => (
                        <button key={index} className={`${styles.button} ${index > 0 ? styles.hollow : ""}`} onClick={() => handleFilterClick(item, index)}>
                            {item}
                        </button>
                    ))}
                </div>
                <div className="project-grid">
                    <ProjectsGrid />
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
