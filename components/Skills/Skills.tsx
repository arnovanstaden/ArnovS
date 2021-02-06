
// Styles
import styles from "./skills.module.scss";

export default function Skills() {

    type TSkill = {
        name: string,
    }

    const Skill = ({ name }: TSkill) => {
        const iconName = name.replace(/ /g, "").toLowerCase()
        return (
            <div className={styles.skill}>
                <i className={`icon-${iconName}`}></i>
                <p>{name}</p>
            </div>
        )
    }


    return (
        <>
            {/* <div className={styles.filter}>
                <ul>
                    <li>
                        Languages
                    </li>
                    <li>
                        Frameworks
                    </li>
                    <li>
                        Libraries
                    </li>
                    <li>
                        Tools
                    </li>
                </ul>
            </div> */}
            <div className={styles.grid}>
                <Skill name="HTML" />
                <Skill name="CSS" />
                <Skill name="SASS" />
                <Skill name="JavaScript" />
                <Skill name="TypeScript" />
                <Skill name="NodeJS" />
                <Skill name="React" />
                <Skill name="NextJS" />
                <Skill name="Gatsby" />
                <Skill name="JQuery" />
                <Skill name="Bootstrap" />
                <Skill name="JSON" />
                <Skill name="Jest" />
                <Skill name="Webpack" />
                <Skill name="GIT" />
                <Skill name="GitHub" />
                <Skill name="NPM" />
                <Skill name="MongoDB" />
                <Skill name="Adobe Illustrator" />
                <Skill name="Adobe Photoshop" />
                <Skill name="Adobe After Effects" />
            </div>
        </>
    )
}
