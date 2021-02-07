import ClassNames from "classnames";
import Image from 'next/image';

// Styles
import styles from "./section.module.scss";

interface SectionProps {
    children: React.ReactNode;
    idProp?: string;
    light?: boolean;
    simple?: boolean;
    heading?: string;
}

export default function Section({
    children,
    idProp,
    light,
    simple,
    heading
}: SectionProps) {

    type TSectionSkew = {
        type: string
    }

    type TSectionHeading = {
        text: string
    }

    const SectionHeading = ({ text }: TSectionHeading) => {
        return (
            <div className={styles.heading}>
                <img src="/images/logos/logo-light.svg" alt="" />
                <h1>{text}</h1>
            </div>
        )
    }

    var sectionClass = ClassNames({
        [styles.section]: true,
        [styles.light]: light,
        [styles.simple]: simple,
    });

    return (
        <section className={sectionClass} id={idProp}>
            <div className="container">
                {heading ? <SectionHeading text={heading} /> : null}
                {children}
            </div>
        </section>
    )
}