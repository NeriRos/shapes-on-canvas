"use client"

import styles from "./Canvas.module.css"
import { forwardRef, useMemo } from "react"
import { useCanvas } from "@/app/(canvas)/components/Canvas/CanvasContext"
import { ShapesToComponentMap } from "@/app/(canvas)/components/Shapes/ShapesToComponentMap"

export const Canvas = forwardRef((props, ref) => {
    const { shapes } = useCanvas()

    const shapesNodes = useMemo(() => shapes.map((shape, index) => {
        const Component = ShapesToComponentMap[shape.type]

        return <Component key={index} {...shape} />
    }))

    return <canvas ref={ref} className={styles.canvas}>
        {shapesNodes}
    </canvas>
})