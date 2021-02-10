import { useState, useEffect } from "react";
import ReactTooltip from 'react-tooltip';

// Styles
import styles from "./about.module.scss";

export default function About() {
    const [render, setRender] = useState(false);

    useEffect(() => {
        setRender(true)
    }, []);

    return (
        <div className={styles.grid}>
            <div className={styles.text}>
                <p>The best things in life are JavaScript, travelling and coffee; with a strong cup of coffee having an index of 0.</p>

                <p>Growing up exposed to the golden era of Windows 98 Home Edition, I fell in love with computers, the internet and everything in its orbit. The dial-up sound was my life's theme-song during my childhood years.</p>

                <p>After university, I indulged my ever-present wanderlust and embarked on an expedition across South East Asia "living my best life" and "finding myself". <span>/* Insert the usual hipster saying like learning adaptability, open-mindedness and communication skills here. Remember to delete later! */</span></p>

                <p>In 2018 I founded <a href="https://webdacity.dev" target="blank">Webdacity</a>, a web design &amp; development studio. Since then I've had roaring success creating awesome websites, web applications and crafting brand identities for a lengthy array of clients and I have been voted as the funniest guy in my workplace of 1 every year since. Because I can apparently do everything in the IT sphere [according to everyone that's not in the industry], I'm also an expert at resetting routers and getting printers to work.</p>

                <p>In my fleeting spare time, I enjoy playing console games, diving into the rabbit hole of cats on the internet and helping my mom adjust the settings on her phone. Oh, and building awesome digital products that deliver real intrinsic value to its users.</p>

                <p><span>Disclaimer: I believe tabs are superior to spaces [especially when used on a mechanical keyboard in the presence of others]. I'm fiercely loyal and will never leave a friend behind, hence my preference for  <span>"</span>  over  <span>'</span>.</span></p>
            </div>
            <div className={styles.extra}>
                <div className={styles.block}>
                    <p className="info-block">Stats</p>
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <h3>03+</h3>
                            <p>Years <br /> Experience</p>
                        </div>
                        <div className={styles.stat}>
                            <h3>55+</h3>
                            <p>Projects <br /> Completed</p>
                        </div>
                        <div className={styles.stat}>
                            <h3>2k+</h3>
                            <p>Commits <br />on GitHub</p>
                        </div>
                    </div>
                </div>
                <div className={styles.block}>
                    <p className="info-block">Languages</p>
                    <ul className={styles.languages}>
                        <li>
                            <i></i>
                            English <span>- Native</span>
                        </li>
                        <li>
                            <i></i>
                            Afrikaans <span>- Native</span>
                        </li>
                        <li>
                            <i></i>
                            German <span>- A1</span>
                        </li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <p className="info-block">Motto</p>
                    <div className={styles.motto}>
                        <p>Any application that can be written in JavaScript, will eventually be written in JavaScript.
                    <span>- Atwood's Law</span>
                        </p>
                    </div>
                </div>
                <div className={styles.block}>
                    <p className="info-block">Interests</p>
                    <div className={styles.interests}>
                        <i className="icon-reading" data-tip="Reading"></i>
                        <i className="icon-coding" data-tip="Coding"></i>
                        <i className="icon-gaming" data-tip="Gaming"></i>
                        <i className="icon-travel" data-tip="Travel"></i>
                        <i className="icon-spotify" data-tip="Spotify"></i>
                        <i className="icon-photography" data-tip="Photography"></i>
                        <i className="icon-weights" data-tip="Training"></i>
                        <i className="icon-cooking" data-tip="Cooking"></i>
                        <i className="icon-reddit" data-tip="Reddit"></i>
                    </div>
                    {render ? <ReactTooltip
                        place="bottom"
                        effect="solid"
                        borderColor="#0061f0"
                        border={true} /> : null}
                </div>
            </div>
        </div>
    )
}
