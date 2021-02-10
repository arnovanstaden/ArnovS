import Link from "next/link";


// Styles
import styles from "./header.module.scss";

export default function Header() {

    // Handlers
    const handleNav = () => {

    }


    // Subcomponents
    const Menu = () => (
        <>
            <Link href="/projects">
                <a>Projects</a>
            </Link>
            <Link href="/#skills">
                <a>Skills</a>
            </Link>
            <Link href="/#about">
                <a>About</a>
            </Link>
            <Link href="/#contact">
                <a>Contact</a>
            </Link>
        </>
    )

    const Social = () => (
        <ul className={styles.social}>
            <li>
                <a href="https://github.com/arnovanstaden" target="blank" aria-label="GitHub">
                    <i className="icon-github"></i>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/arnovanstaden/" target="blank" aria-label="LinkedIn">
                    <i className="icon-linkedin"></i>
                </a>
            </li>
            <li className={styles.mail} >
                <a href="mailto:arno@webdacity.dev" aria-label="Email">
                    <i className="icon-paper-plane"></i>
                </a>
            </li>
        </ul>
    )

    return (
        <header className={styles.header}>
            <Link href="/">
                <a className={styles.name}>
                    <img className={styles.logo} src="/images/logos/logo-light.svg" alt="arnovs logo" width="24px" height="100%" />
                    <span>Arno</span> van Staden
                </a>
            </Link>
            <nav className={styles.nav}>
                <Menu />
            </nav>
            <Social />
            <button className={styles.mobileButton} onClick={() => handleNav()}>
                <i className="icon-menu"></i>
            </button>
            <div className={styles.mobileNav}>
                <div className={styles.notNav}></div>
                <nav className={styles.menu}>
                    <Menu />
                    <Social />
                </nav>
            </div>
        </header>
    )
}
