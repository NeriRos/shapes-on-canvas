import { Canvas } from "@/app/(canvas)/components/Canvas"
import styles from "./canvas.module.css"

export default function() {

    return (
        <div className={styles.container}>
            <Canvas>
            </Canvas>
        </div>
    )
}