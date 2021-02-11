import Image from "next/image";
import Link from "next/link";
import Fade from "react-reveal/Fade"

// Style
import styles from "./project.module.scss";

type TProject = {
    name: string;
    type: string;
    services: string;
    category: string;
    [key: string]: any;
}

export default function Project(project: TProject) {

    const projectPath = `/projects/${project.type.toLowerCase()}/${project.name.replace(/ /g, "").toLowerCase()}`
    const projectImagePath = `${project.type.toLowerCase()}/${project.name.replace(/ /g, "-")}/cover.jpg`;

    return (
        <Link href={projectPath}>
            <a className={styles.project} data-category={project.category}>
                <div className={styles.imageContainer}>
                    <Image priority src={`/images/projects/${projectImagePath}`} className={styles.image} alt={`${project.name} Cover`} width={500} height="auto" />
                </div>
                <p className={styles.name}>{project.name}</p>
                <p className={styles.brief}>{project.brief}</p>
            </a>
        </Link>
    )
}
