import { useRouter } from "next/router";
import Image from 'next/image';
import { useState, useEffect } from "react";
import ReactTooltip from 'react-tooltip';
import { getProjectImagePath } from "../../utils/helpers";

// Components
import Layout from '../Layout/Layout';
import Section from '../Section/Section';


// Styles
import styles from "./project-template.module.scss";

export default function ProjectTemplate({ project, imageCount }) {
    const [render, setRender] = useState(false);

    useEffect(() => {
        setRender(true)
    }, []);

    // Dynamic Paths
    const router = useRouter()
    const { name } = router.query;
    // Project Images 
    const ProjectImages = () => {
        let array = new Array(imageCount - 2).fill(0);
        const otherImages = array.map((value, index) => (
            <div className={styles.imageContainer} key={index}>
                <Image src={`${getProjectImagePath(project)}/${index + 1}.jpg`} width={1500} quality={85} height="auto" alt={`${project.name} project image`} className={styles.image} />
            </div>
        ))

        return (
            <>
                {project.type === "Development"
                    ? <div className={styles.imageContainer}>
                        <Image priority src={`${getProjectImagePath(project)}/landing.jpg`} width={1500} quality={85} height="auto" alt={`${project.name} landing image`} className={styles.image} />
                    </div>
                    : null}
                <div className={styles.imageContainer}>
                    <Image priority src={`${getProjectImagePath(project)}/cover.jpg`} width={1500} quality={85} height="auto" alt={`${project.name} landing image`} className={styles.image} />
                </div>
                {otherImages}
            </>

        )
    }


    return (
        <Layout
            head={{
                title: `${project.name} | Arno van Staden`,
                description: project.description,
                robots: false
            }}
        >



            <Section
                light
            >
                <section className={styles.landing}>
                    <div className={styles.text}>
                        <h1>{project.name}</h1>
                        <p>{project.brief}</p>
                        <div className={styles.buttons}>
                            {project.link ?
                                <button className="button">
                                    <a href={project.link} target="blank">
                                        <i className="icon-link"></i>
                                Visit Site
                            </a>
                                </button>
                                : null}
                            {project.repo ?
                                <button className="button button--border">
                                    <a href={project.repo} target="blank">
                                        <i className="icon-github"></i>
                                Repo
                            </a>
                                </button>
                                : null}
                        </div>
                    </div>
                </section>
                <div className={styles.details}>
                    <div className={styles.text}>
                        <div className={styles.overview}>
                            <p className="info-block">Overview</p>
                            <p className={styles.description}>{project.description}</p>
                        </div>
                        {project.features ?
                            <div className={styles.features}>
                                <p className="info-block">Features</p>
                                <ul>
                                    {project.features.map((feature, index) => (
                                        <li key={index}>
                                            <i></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            : project.elements ?
                                <div className={styles.features}>
                                    <p className="info-block">Elements</p>
                                    <ul>
                                        {project.elements.map((element, index) => (
                                            <li key={index}>
                                                <i></i>
                                                {element}
                                            </li>
                                        ))}
                                    </ul>
                                </div> : null}
                    </div>
                    <div className={styles.info}>
                        {project.status ?
                            <div className={styles.row}>
                                <h5>Status</h5>
                                <p className={styles.status}>{project.status}</p>
                            </div>
                            : null}
                        <div className={styles.row}>
                            <h5>Date</h5>
                            <p>{project.date}</p>
                        </div>
                        <div className={styles.row}>
                            <h5>Industry</h5>
                            <p>{project.industry}</p>
                        </div>
                        {project.stack ?
                            <div className={styles.row}>
                                <h5>Type</h5>
                                <p>{project.stack}</p>
                            </div>
                            : null}
                        {project.tools
                            ? <div className={styles.row}>
                                <h5>Stack</h5>
                                <ul className={styles.tools}>
                                    {project.tools.map((tool, index) => (
                                        <li key={index}>
                                            <i className={`icon-${tool.toLowerCase()}`} data-tip={tool}></i>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            : null}
                    </div>
                </div>
                {render ? <ReactTooltip
                    place="bottom"
                    effect="solid"
                    borderColor="#0061f0"
                    border={true} /> : null}
            </Section>

            <Section>
                <div className={styles.gallery}>
                    <ProjectImages />
                </div>
            </Section>
        </Layout>
    )
}
