import styles from "./canvas.module.css"
import { FloatingMenu } from "@/app/(canvas)/components/FloatingMenu/FloatingMenu"
import { CanvasProvider } from "@/app/(canvas)/components/Canvas/CanvasProvider"

export default function() {

    return (
        <div className={styles.container}>
            <CanvasProvider shapes={[
                {
                    id: 1,
                    type: "square",
                    position: {
                        x: 10,
                        y: 10,
                    },
                    color: "red",
                    attributes: {
                        size: 10,
                    },
                },
            ]}>
                <FloatingMenu />
            </CanvasProvider>
        </div>
    )
}