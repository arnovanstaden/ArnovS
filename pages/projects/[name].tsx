import { useRouter } from "next/router"

// Components
import Layout from '../../components/Layout/Layout';

// Data
import devProjects from "../../assets/data/projects-development.json";

// Styles
// import styles from "./project.module.scss";

export default function Project({ projects }) {
    const router = useRouter()
    const { name } = router.query;
    const project = projects.find(project => project.name.replace(/ /g, "").toLowerCase() === name);
    return <Layout
        head={{
            title: project.name,
            description: project.description,
            robots: false
        }}
    >
        {/* <h1>{project}</h1> */}
    </Layout>
}

export async function getStaticProps({ params }) {
    const res = await fetch("http://localhost:3000/api/projects");
    const projects = await res.json()
    return {
        props: {
            projects
        }
    }
}

export async function getStaticPaths() {
    const paths = devProjects.map(project => {
        return {
            params: {
                name: project.name.replace(/ /g, "").toLowerCase()
            }
        }
    });
    console.log(paths)
    return {
        paths,
        fallback: false
    }
}





