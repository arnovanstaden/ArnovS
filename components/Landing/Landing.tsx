import { useEffect } from "react";
import { useMediaQuery } from 'react-responsive'

// Components
import LandingAnimation from '../LandingAnimation/LandingAnimation';
import Button from "../Library/Button/Button"

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
                            South African Frontend Engineer over at <a href="https://www.tandem.net" target="blank">Tandem</a>. I help build a product that connects language learners all over the world.
                        </p>
                        <div className={styles.status}>
                            <p className="info-block">Status</p>
                            <p>Relocating Berlin, Germany.</p>
                        </div>
                        <div className={styles.buttons}>
                            <Button link="/projects">
                                View My Work
                            </Button>

                            <Button link="/#contact" hollow>
                                Let's Talk
                            </Button>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

