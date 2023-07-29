import { Canvas } from "@/app/(canvas)/components/Canvas"
import styles from "./canvas.module.css"
import { Square } from "@/app/(canvas)/components/Shapes/Square"

export default function() {

    return (
        <div className={styles.container}>
            <Canvas items={[
                <Square color={"red"} size={10} y={10} x={10} />,
            ]}>

            </Canvas>
        </div>
    )
}