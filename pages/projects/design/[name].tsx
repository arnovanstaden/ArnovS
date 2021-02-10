import { useRouter } from "next/router";
import Image from 'next/image';
import { useState, useEffect } from "react";
import ReactTooltip from 'react-tooltip';
import { getFileCount } from "../../../utils/utils"

// Components
import Layout from '../../../components/Layout/Layout';
import Section from '../../../components/Section/Section';


// Styles
import styles from "../../../styles/[project].module.scss";

// Data
import projects from "../../../assets/data/projects.json";

export default function Project({ project, imageCount }) {
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
                <Image src={`${getProjectImagePath(project)}/${index + 1}.jpg`} layout="fill" alt={`${project.name} project image`} className={styles.image} />
            </div>
        ))

        return (
            <>
                <div className={styles.imageContainer}>
                    <Image src={`${getProjectImagePath(project)}/landing.jpg`} layout="fill" alt={`${project.name} landing image`} className={styles.image} />
                </div>
                {otherImages}
            </>

        )
    }


    return <Layout
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
            </div>
            <img className={styles.logo} src="/images/logos/logo-light.svg" alt="" />
        </section>

        <Section
            light
        >
            <div className={styles.details}>
                <div className={styles.text}>
                    <h3>{project.name}</h3>
                    <h6>{project.brief}</h6>
                    <p>{project.description}</p>
                    <div className={styles.buttons}>
                        <button className="button">
                            <a href="">Visit Site</a>
                        </button>
                        <button className="button button--hollow">
                            <a href="">Repo</a>
                        </button>
                    </div>
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
}

export async function getStaticProps({ params }) {
    // const res = await fetch(`${process.env.API_URL}/projects/${params.name}`);
    // const project = await res.json();
    const project = projects.find(project => project.name.replace(/ /g, "").toLowerCase() === params.name && project.type === "Design");

    const imageCount = getFileCount(project);
    return {
        props: {
            project,
            imageCount
        }
    }
}

export async function getStaticPaths() {
    const paths = projects.map(project => {
        return {
            params: {
                name: project.name.replace(/ /g, "").toLowerCase()
            }
        }
    });
    return {
        paths,
        fallback: false
    }
}

function getProjectImagePath(project): string {
    const path = `/images/projects/${project.type}/${project.name.replace(/ /g, "-")}`
    return path
}



