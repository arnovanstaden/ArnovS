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

export default function Project({ name, type, services, category }: TProject) {

    const projectPath = `/projects/${type.toLowerCase()}/${name.replace(/ /g, "").toLowerCase()}`
    const projectImagePath = `${type.toLowerCase()}/${name.replace(/ /g, "-")}/${type === "Development" ? `cover` : `landing`}.jpg`;

    return (
        <Link href={projectPath}>
            <Fade>
                <a className={styles.project} data-category={category}>
                    <div className={styles.imageContainer}>
                        <Image priority src={`/images/projects/${projectImagePath}`} className={styles.image} alt={`${name} Cover`} width={500} height="auto" />
                    </div>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.services}>{services}</p>
                </a>
            </Fade>
        </Link>
    )
}
