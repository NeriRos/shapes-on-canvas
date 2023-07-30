import { MouseMoveListener } from "@/editor/canvas/modules/gestures-detector/components/MouseMoveListener"
import Styles from "./CoordinatesDisplay.module.css"
import { useState } from "react"

export type CoordinatesDisplayProps = {
    itemClassName?: string
}

export const CoordinatesDisplay = (props: CoordinatesDisplayProps) => {
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })

    return <>
        <div className={Styles.coordinateContainer}>
            Mouse X - {coordinates.x}
        </div>
        <div className={Styles.coordinateContainer}>
            Mouse Y - {coordinates.y}
        </div>
        <MouseMoveListener action={setCoordinates} />
    </>
}