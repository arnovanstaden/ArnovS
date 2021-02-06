import Link from "next/link"

// Styles
import styles from "./header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">
                <a className={styles.name}>
                    <img className={styles.logo} src="/images/logos/logo-light.svg" alt="" />
                    <span>Arno</span> van Staden
                </a>
            </Link>
            <nav className={styles.nav}>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
            <ul className={styles.social}>
                <li>
                    <a href="https://github.com/arnovanstaden" target="blank">
                        <i className="icon-github"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/arnovanstaden/" target="blank">
                        <i className="icon-linkedin"></i>
                    </a>
                </li>
                <li className={styles.mail}>
                    <a href="mailto:arno@webdacity.dev">
                        <i className="icon-paper-plane"></i>
                    </a>
                </li>
            </ul>
        </header>
    )
}
