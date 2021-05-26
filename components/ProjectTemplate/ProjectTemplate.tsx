import { useRouter } from "next/router";
import Image from 'next/image';
import { useState, useEffect } from "react";
import ReactTooltip from 'react-tooltip';
import { getProjectImagePath } from "../../utils/projects";


// Components
import Layout from '../Layout/Layout';
import Section from '../Section/Section';
import Button from "../Library/Button/Button"

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
        let otherImages;
        if (imageCount >= 2) {
            let array = []
            if (project.type === "Development") {
                array = new Array(imageCount - 2).fill(0);
            } else {
                array = new Array(imageCount - 1).fill(0);
            }
            otherImages = array.map((value, index) => (
                <div className={styles.imageContainer} key={index}>
                    <Image src={`${getProjectImagePath(project)}/${index + 1}.jpg`} width={1500} quality={85} height="auto" alt={`${project.name} project image`} className={styles.image} />
                </div>
            ))
        }

        return (
            <>
                {project.type === "Development" && imageCount >= 2
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
                title: `${project.name}`,
                description: project.brief,
                canonical: `/projects/${project.type.toLowerCase()}/${project.name.replace(/ /g, "").toLowerCase()}`,
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
                                <Button
                                    href={project.link}
                                    icon={<i className="icon-link"></i>}
                                >
                                    Visit Site
                                </Button>
                                : null}
                            {project.test_link ?
                                <Button
                                    href={project.test_link}
                                    icon={<i className="icon-coding"></i>}
                                    dataTip="Explore This App With A Dummy Account"
                                >
                                    Test Run
                                </Button>
                                : null}
                            {project.repo ?
                                <Button
                                    href={project.repo}
                                    icon={<i className="icon-github"></i>}
                                >
                                    Repo
                                </Button>
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
                                            <p>{feature}</p>
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
                                                <p>{element}</p>
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
                        {project.tools && project.category !== "Design"
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
                            : <div className={styles.row}>
                                <h5>Tools</h5>
                                <ul className={styles.tools}>
                                    {project.tools.map((tool, index) => (
                                        <li key={index}>
                                            <i className={`icon-${tool.toLowerCase().replace(/ /g, "")}`} data-tip={tool}></i>
                                        </li>
                                    ))}
                                </ul>
                            </div>}
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
        </Layout >
    )
}