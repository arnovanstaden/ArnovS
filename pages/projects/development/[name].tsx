import { getFileCount } from "../../../utils/utils";

// Components
import ProjectTemplate from './../../../components/ProjectTemplate/ProjectTemplate';

// Styles
import styles from "../../../styles/[project].module.scss";

// Data
import projects from "../../../assets/data/projects.json";

export default function Project({ project, imageCount }) {
    return <ProjectTemplate project={project} imageCount={imageCount} />
}

export async function getStaticProps({ params }) {
    const project = projects.find(project => project.name.replace(/ /g, "").toLowerCase() === params.name && project.type === "Development");
    const imageCount = getFileCount(project);
    return {
        props: {
            project,
            imageCount
        }
    }
}

export async function getStaticPaths() {
    const projectPaths = projects.filter(project => project.type === "Development" && project.visible)
    const paths = projectPaths.map(project => {
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

