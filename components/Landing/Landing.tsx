import Link from "next/link";
import LandingAnimation from '../LandingAnimation/LandingAnimation';
import { useEffect } from "react";
import { useMediaQuery } from 'react-responsive'



// Styles
import styles from "./landing.module.scss";

export default function Landing() {

    const isMobile: boolean = useMediaQuery({
        query: '(max-width: 768px)'
    })

    useEffect(() => {
        let canvas = document.querySelector(`.${styles.image} canvas`);
        isMobile ? canvas.setAttribute("style", "background-color:#151618;touch-action:scroll") : null;
    }, [])


    return (
        <section className={styles.landing}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.image}>
                        <LandingAnimation />
                    </div>
                    <div className={styles.content}>
                        <p className="info-block">Front End Developer</p>
                        <h1 className={styles.name}>Hello, I'm Arno van Staden.</h1>
                        <p className={styles.description}>
                            South African Front End Web Developer &amp; Designer currently offering web development and design services over at <a href="https://webdacity.dev" target="blank">Webdacity</a>. I design and build bespoke web applications and websites to help  clients grow their business.
                        </p>
                        <div className={styles.status}>
                            <p className="info-block">Status</p>
                            <p > Seeking Employment in Berlin, Germany.</p>
                        </div>
                        <div className={styles.buttons}>
                            <Link href="/projects">
                                <a>
                                    <button className="button">
                                        <a>View My Work</a>
                                    </button>
                                </a>
                            </Link>

                            <button className="button button--hollow">
                                <a href="/#contact">Let's Talk</a>
                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

