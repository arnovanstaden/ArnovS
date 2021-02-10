// Components
import Contact from './../Contact/Contact';

// Styles
import styles from "./footer.module.scss";

// Types


export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div className="container">
                <Contact footer />
            </div>
        </footer>
    )
}
