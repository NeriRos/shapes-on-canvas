import {
    ShapeMouseMovementListener,
} from "@/editor/canvas/modules/gestures-detector/components/ShapeMouseMovementListener"
import Styles from "./CoordinatesDisplay.module.css"
import { useState } from "react"
import { Shape } from "@/editor/canvas/types/Shape"
import { TEXTS } from "@/editor/coordinates/components/coordinates-display/consts"

export type CoordinatesDisplayProps = {}

export const CoordinatesDisplay = (props: CoordinatesDisplayProps) => {
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })
    const [shape, setShape] = useState<Shape>()

    const onMove = (x: number, y: number) => {
        setCoordinates({
            x, y,
        })
    }

    const onLeave = () => {
        setShape(undefined)
        setCoordinates({ x: 0, y: 0 })
    }

    const onShapeChange = (shape: Shape) => {
        setShape(shape)
    }

    return <>
        <div className={Styles.title}>
            {TEXTS.SHAPE} {shape?.title}
        </div>
        <div className={Styles.coordinateContainer}>
            {TEXTS.X} {coordinates.x}
        </div>
        <div className={Styles.coordinateContainer}>
            {TEXTS.Y} {coordinates.y}
        </div>
        <ShapeMouseMovementListener onLeave={onLeave} onMove={onMove} onShapeChange={onShapeChange} />
    </>
}