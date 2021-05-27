
// Styles
import styles from "./skills.module.scss";
import { Fade } from 'react-reveal/Fade';

export default function Skills() {

    const skills = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "TypeScript",
        "NodeJS",
        "React",
        "NextJS",
        "Gatsby",
        "Sanity",
        "Firebase",
        "JQuery",
        "Bootstrap",
        "Material-UI",
        "JSON",
        "GraphQL",
        "Jest",
        "GIT",
        "GitHub",
        "NPM",
        "MongoDB",
        "ExpressJS",
        "Heroku",
        "Vercel",
        "Netlify",
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Adobe After Effects",]

    type TSkill = {
        name: string,
        index: number
    }

    const Skill = ({ name, index }: TSkill) => {
        const iconName = name.replace(/ /g, "").toLowerCase()
        return (
            <div className={styles.skill}
                onMouseEnter={() => handleHoverEnter(index)}
                onMouseLeave={() => handleMouseLeave()}
            >
                <i className={`icon-${iconName}`}></i>
                <p>{name}</p>
            </div>
        )
    }

    const handleHoverEnter = (index: number) => {
        const grid = document.querySelector(`.${styles.grid}`)
        const children = Array.from(grid.children);
        children.forEach((child) => {
            child.classList.add(styles.fade);
        })
        children[index].classList.remove(styles.fade)
    }

    const handleMouseLeave = () => {
        const grid = document.querySelector(`.${styles.grid}`)
        const children = Array.from(grid.children);
        children.forEach((child) => {
            child.classList.remove(styles.fade)
        })
    }


    return (
        <>
            {/* <div className={styles.filter}>
                <ul>
                    <li>
                        Languages
                    </li>
                    <li>
                        Frameworks & Libraries
                    </li>
                    <li>
                        Tools
                    </li>
                </ul>
            </div> */}
            <div className={styles.grid}>
                {skills.map((skill, index) => (
                    <Skill name={skill} key={index} index={index} />
                ))}

            </div>
        </>
    )
}
