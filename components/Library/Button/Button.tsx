import Link from "next/link";
import ClassNames from "classnames";

import styles from "./button.module.scss";

interface IProps {
    link?: string;
    children: string;
    icon?: React.ReactNode;
    hollow?: boolean;
    href?: string;
    dataTip?: string;
}

const Button = ({ link, children, icon, hollow, href, dataTip }: IProps) => {

    const classes = ClassNames(
        styles.button,
        hollow ? styles.hollow : null
    )

    const Inner = () => {
        return (
            <button className={classes} >
                {icon ? icon : null}
                {children}
            </button>
        )
    }

    if (href) {
        return (
            <a href={href} target="_blank" data-tip={dataTip ? dataTip : null}>
                <Inner />
            </a>
        )
    }

    if (link) {
        return (
            <Link href={link}>
                <a >
                    <Inner />
                </a>
            </Link>
        )
    }

    return (
        <Inner />
    )
}

export default Button
