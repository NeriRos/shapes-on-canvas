import Link from "next/link"
import styles from "./FloatingCredits.module.css"

export const FloatingCredits = () => {
    return <div className={styles.credits}>
        Neriya Rosner © 2023 | <Link href={"https://github.com/NeriRos/shapes-on-canvas"}>GitHub</Link> | <Link
        href={"https://www.linkedin/in/neriya-rosner"}>LinkedIn</Link>
    </div>
}