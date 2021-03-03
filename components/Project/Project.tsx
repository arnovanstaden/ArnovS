import Image from "next/image";
import Link from "next/link";
import ReactTooltip from 'react-tooltip';
import { useState, useEffect } from "react";


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
    const projectImagePath = `${project.type.toLowerCase()}/${project.name.replace(/ /g, "-")}/cover.jpg`;

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
        <Link href={projectPath}>
            <a className={styles.project} data-category={project.category}>
                <div className={styles.imageContainer}>
                    {project.status ? <span>{project.status}</span> : null}
                    <Image priority src={`/images/projects/${projectImagePath}`} className={styles.image} alt={`${project.name} Cover`} width={500} height="auto" />
                </div>
                <div className={styles.name}>
                    <p>{project.name}</p>
                </div>
                <p className={styles.brief}>{project.brief}</p>
                {project.tools ? <ProjectStack /> : null}
            </a>
        </Link>
    )
}
