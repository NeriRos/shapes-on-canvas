import { MouseMoveListener } from "@/editor/canvas/modules/gestures-detector/components/MouseMoveListener"
import Styles from "./CoordinatesDisplay.module.css"

export type CoordinatesDisplayProps = {}

export const CoordinatesDisplay = (props: CoordinatesDisplayProps) => {
    return <div className={Styles.container}>
        <MouseMoveListener action={console.log} />
    </div>
}