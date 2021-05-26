// Components
import Layout from './../components/Layout/Layout';
import Button from "../components/Library/Button/Button"

// Styles
import styles from "../styles/404.module.scss";

export default function PageNotFound() {
    return (
        <Layout
            head={{
                title: `Page Not Found | 404`,
                description: `Page not Found`,
                robots: false
            }}
        >
            <section className={styles.landing}>
                <div className={styles.text}>
                    <h1>404 | Page Not Found</h1>
                    <p>The page you are looking for does not exist.</p>
                    <div className={styles.buttons}>
                        <Button link="/">
                            Go Back
                        </Button>
                    </div>
                </div>

                <img className={styles.logo} src="/images/logos/logo-light.svg" alt="" />
            </section>
        </Layout>
    )
}
