import { ShapeMouseMovementListener } from "@/editor/canvas/modules/gestures-detector/components/ShapeMouseMovementListener"
import Styles from "./CoordinatesDisplay.module.css"
import { useState } from "react"
import { Shape } from "@/editor/canvas/components/shape/Shape"

export type CoordinatesDisplayProps = {}

export const CoordinatesDisplay = (props: CoordinatesDisplayProps) => {
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })
    const [shape, setShape] = useState<Shape>()

    const onMove = (position: Shape["position"]) => {
        setCoordinates(position)
    }

    const onShapeChange = (shape: Shape) => {
        setShape(shape)
    }

    return <>
        <div className={Styles.title}>
            {shape?.title}
        </div>
        <div className={Styles.coordinateContainer}>
            Mouse X - {coordinates.x}
        </div>
        <div className={Styles.coordinateContainer}>
            Mouse Y - {coordinates.y}
        </div>
        <ShapeMouseMovementListener onMove={onMove} onShapeChange={onShapeChange} />
    </>
}