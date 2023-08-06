import Link from "next/link"
import styles from "./FloatingCredits.module.css"

export const FloatingCredits = () => {
    return <div className={styles.credits}>
        <span>
        Neriya Rosner © 2023 | <Link href={"https://github.com/NeriRos/shapes-on-canvas"}>GitHub</Link> | <Link
            href={"https://www.linkedin.com/in/neriya-rosner"}>LinkedIn</Link>
        </span>
    </div>
}