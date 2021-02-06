// Components
import Layout from './../../components/Layout/Layout';

// Styles 
// import styles from "../styles/projects.module.scss"

export default function Projects() {
    return (
        <Layout
            head={{
                title: "Projects",
                description: "Projects Description",
            }}>
            <h1>Projects List</h1>
        </Layout>
    )
}

// export function getAllProjectNames() {
//     return devProjects.map(project => {
//         return {
//             params: {
//                 name: project.name
//             }
//         }
//     })
// }

// export function getProjectData(name) {
//     const project = devProjects.find(project => project.name === name);
//     return {
//         name,
//         ...project
//     }
// }

