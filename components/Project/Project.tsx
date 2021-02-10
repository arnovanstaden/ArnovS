import Image from "next/image";
import Link from "next/link";

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
            <a className={styles.project} data-category={category}>
                <div className={styles.imageContainer}>
                    <Image src={`/images/projects/${projectImagePath}`} layout="fill" className={styles.image} alt={`${name} Cover`} />
                </div>
                <p className={styles.name}>{name}</p>
                <p className={styles.services}>{services}</p>
            </a>
        </Link>
    )
}
