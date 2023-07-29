import styles from "./index.module.css"
import Link from "next/link"
import { GET_STARTED_URL, TEXTS } from "@/app/(marketing)/consts"

export default function() {
    return (
        <div className={styles.container}>
            <h1>Shapes on Canvas</h1>
            <Link href={GET_STARTED_URL}>{TEXTS.GET_STARTED}</Link>
        </div>
    )
}
