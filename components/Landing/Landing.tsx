import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "./landing.module.scss";

export default function Landing() {
    return (
        <section className={styles.landing}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.image}>
                        {/* <Image layout="fill" objectFit="contain" src="/images/other/arno-landing.png" /> */}
                    </div>
                    <div className={styles.content}>
                        <p className="info-block">Front End Developer</p>
                        <h1 className={styles.name}>Hello, I'm Arno van Staden.</h1>
                        <p className={styles.description}>
                            I'm a South African currently managing my own studio, <a href="https://webdacity.dev" target="blank">Webdacity</a>, offering web development &amp; design services. I design &amp; build bespoke websites &amp; web applications to help my clients grow their business.
                        </p>
                        <div className={styles.status}>
                            <p><span>Status</span> Seeking Employment in Berlin, Germany.</p>
                        </div>
                        <div className={styles.buttons}>
                            <Link href="/projects">
                                <button className="button">
                                    <a>View My Work</a>
                                </button>
                            </Link>
                            <button className="button button--hollow">
                                <a href="#contact">Let's Talk</a>
                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

