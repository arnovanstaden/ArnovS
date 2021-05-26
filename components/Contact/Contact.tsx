import ClassNames from 'classnames';

// Components
import Button from "../Library/Button/Button"

// Styles
import styles from "./contact.module.scss";

type TContact = {
    footer?: boolean
}

export default function Contact({ footer }: TContact) {
    const contactClasses = ClassNames({
        [styles.grid]: true,
        [styles.footer]: footer
    })

    return (
        <div className={contactClasses}>
            {footer ? null :
                <Button href="/other/CV - Arno van Staden - 2021.pdf">
                    Download My CV
                </Button>
            }
            <div className={styles.contact}>
                <a href="mailto:arno@webdacity.dev">
                    <i className="icon-email"></i>
                    arno@webdacity.dev
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
