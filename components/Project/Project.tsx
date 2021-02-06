// Style
import styles from "./project.module.scss";
import Image from "next/image";
import Link from "next/link";

type TProject = {
    name: string;
    type: string;
    tools: string[];
    services: string;
    [key: string]: any;
}

export default function Project({ name, type, tools, services }: TProject) {
    const projectPath = `/projects/${name.replace(/ /g, "").toLowerCase()}`
    const projectImagePath = `${type.toLowerCase()}/${name.replace(/ /g, "-")}/landing.jpg`;
    return (
        <Link href={projectPath}>
            <a className={styles.project}>
                <div className={styles.imageContainer}>
                    <Image src={`/images/projects/${projectImagePath}`} layout="fill" className={styles.image} />
                </div>
                <p className={styles.name}>{name}</p>
                <p className={styles.services}>{services}</p>
                {/* <ul className={styles.tools}>
                {tools.map((tool: string, index: number) => (
                    <li key={index}>{tool}</li>
                ))}
            </ul> */}
            </a>
        </Link>
    )
}
