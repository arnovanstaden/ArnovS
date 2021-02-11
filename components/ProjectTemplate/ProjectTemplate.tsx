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
                <Image src={`${getProjectImagePath(project)}/${index + 1}.jpg`} width={1200} height="auto" alt={`${project.name} project image`} className={styles.image} />
            </div>
        ))

        return (
            <>
                <div className={styles.imageContainer}>
                    <Image priority src={`${getProjectImagePath(project)}/landing.jpg`} width={1200} height="auto" alt={`${project.name} landing image`} className={styles.image} />
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

            <section className={styles.landing}>
                <div className={styles.text}>
                    <h1>{project.name}</h1>
                    <p>{project.services}</p>
                    <div className={styles.buttons}>
                        <button className="button">
                            <a href={project.link} target="blank">
                                <i className="icon-link"></i>
                            Visit Site
                        </a>
                        </button>
                        <button className="button button--border">
                            <a href={project.repo} target="blank">
                                <i className="icon-github"></i>
                        Repo
                        </a>
                        </button>
                    </div>
                </div>
                <img className={styles.logo} src="/images/logos/logo-light.svg" alt="" />
            </section>

            <Section
                light
            >
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
                            : null}
                    </div>
                    <div className={styles.info}>
                        <div className={styles.row}>
                            <h5>Project Date</h5>
                            <p>{project.date}</p>
                        </div>
                        <div className={styles.row}>
                            <h5>Industry</h5>
                            <p>{project.industry}</p>
                        </div>
                        {project.tools ?
                            <div className={styles.row}>
                                <h5>Tools</h5>
                                <ul className={styles.tools}>
                                    {project.tools.map((tool, index) => (
                                        <li key={index}>
                                            <i className={`icon-${tool.toLowerCase()}`} data-tip={tool}></i>
                                        </li>
                                    ))}
                                </ul>
                            </div> : null}
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
