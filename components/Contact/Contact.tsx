import styles from "./contact.module.scss";


export default function Contact() {
    return (
        <div className={styles.grid}>
            <button className="button">
                <a href="/other/CV-Arno_van_Staden.pdf" target="_blank">Download My CV</a>
            </button>
            <div className={styles.contact}>
                <a href="mailto:arno@webdacity.dev">
                    <i className="icon-email"></i>
                    arno@webdacity.dev
                </a>
                <a href="tel:+27784225564">
                    <i className="icon-phone"></i>
                    +27 78 422 5564
                </a>
            </div>
            <div className={styles.social}>
                <a href="https://github.com/arnovanstaden" target="blank">
                    <i className="icon-github"></i>
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/arnovanstaden/" target="blank">
                    <i className="icon-linkedin"></i>
                    LinkedIn
                </a>
                <a href="https://dribbble.com/Webdacity" target="blank">
                    <i className="icon-dribbble"></i>
                    Dribbble
                </a>
                <a href="https://www.behance.net/Webdacity" target="blank">
                    <i className="icon-behance"></i>
                    Behance
                </a>
            </div>
        </div>
    )
}
