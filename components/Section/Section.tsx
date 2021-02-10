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
    subheading?: string;
}

export default function Section({
    children,
    idProp,
    light,
    simple,
    heading,
    subheading
}: SectionProps) {

    type TSectionSkew = {
        type: string
    }

    type TSectionHeading = {
        heading: string,
        subheading?: string
    }

    const SectionHeading = ({ heading, subheading }: TSectionHeading) => {
        return (
            <div className={styles.heading}>
                <img src="/images/logos/logo-light.svg" alt="arnovs logo" width="32px" height="100%" />
                <h1>{heading}</h1>
                <h2>{subheading}</h2>
            </div>
        )
    }

    const sectionClass = ClassNames({
        [styles.section]: true,
        [styles.light]: light,
        [styles.simple]: simple,
    });

    return (
        <section className={sectionClass} id={idProp}>
            <div className="container">
                {heading ? <SectionHeading heading={heading} subheading={subheading} /> : null}
                {children}
            </div>
        </section>
    )
}