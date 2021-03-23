import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import { getProjectImagePath } from "../../utils/projects";


// Style
import styles from "./project.module.scss";

type TProject = {
    name: string;
    type: string;
    category: string;
    [key: string]: any;
}

export default function Project(project: TProject) {
    const [render, setRender] = useState(false);

    useEffect(() => {
        setRender(true)
    }, []);

    const projectPath = `/projects/${project.type.toLowerCase()}/${project.name.replace(/ /g, "").toLowerCase()}`

    const ProjectStack = () => {
        return (
            <ul className={styles.stack}>
                {project.tools.map((tool, index) => (
                    tool == "CSS" || tool == "HTML" ? null :
                        <li key={index}>
                            <i className={`icon-${tool.replace(/ /g, "").toLowerCase()}`}></i>
                        </li>
                ))
                }
            </ul>

        )
    }

    return (
        <div className={styles.project} data-category={project.category}>
            <Fade duration={1500}>
                <Link href={projectPath}>
                    <a className={styles.inner}>
                        <div className={styles.imageContainer}>
                            {project.status ? <span>{project.status}</span> : null}
                            <Image priority src={`${getProjectImagePath(project)}/cover.jpg`} className={styles.image} alt={`${project.name} Cover`} width={500} height="auto" />
                        </div>
                        <div className={styles.name}>
                            <p>{project.name}</p>
                        </div>
                        <p className={styles.brief}>{project.brief}</p>
                        {project.tools ? <ProjectStack /> : null}
                    </a>
                </Link>
            </Fade>
        </div>

    )
}
