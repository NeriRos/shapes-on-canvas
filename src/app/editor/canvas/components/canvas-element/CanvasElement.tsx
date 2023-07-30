"use client"

import styles from "./CanvasElement.module.css"
import { forwardRef, useMemo } from "react"
import { ShapesToComponentMap } from "@/editor/canvas/modules/shapes/ShapesToComponentMap"
import { useCanvasElement } from "@/editor/canvas/components/canvas-element/useCanvasElement"

export const CanvasElement = forwardRef<HTMLCanvasElement>((props, ref) => {
    const { shapes, width, height, redrawTimes } = useCanvasElement()

    const shapesNodes = useMemo(() => shapes?.map((shape, index) => {
        const Component = ShapesToComponentMap[shape.type]?.component

        if (Component === undefined) return null

        return <Component key={index} shape={shape} redraw={redrawTimes} />
    }), [shapes, redrawTimes])

    return <canvas ref={ref} width={width} height={height} className={styles.canvas}>
        {shapesNodes}
    </canvas>
})