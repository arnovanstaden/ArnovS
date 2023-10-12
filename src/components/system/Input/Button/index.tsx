import Link from "next/link";
import ClassNames from "classnames";

import styles from "./styles.module.scss";

interface IProps {
  children: string,
  icon?: React.ReactNode,
  hollow?: boolean;
}

const Button = ({ children, icon, hollow }: IProps) => {
  const classes = ClassNames(
    styles.Button,
    hollow ? styles.hollow : null
  )

  return (
    <button className={classes} >
      {icon ? icon : null}
      {children}
    </button>
  )
}

export default Button
