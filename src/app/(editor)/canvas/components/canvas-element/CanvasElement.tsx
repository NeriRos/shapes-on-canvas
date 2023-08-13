"use client"

import styles from "./CanvasElement.module.css"
import { forwardRef, useMemo } from "react"
import { ShapesToComponentMap } from "@/app/(editor)/canvas/modules/shapes/utils/ShapesToComponentMap"
import { useCanvasElement } from "@/app/(editor)/canvas/components/canvas-element/useCanvasElement"

export const CanvasElement = forwardRef<HTMLCanvasElement>(function Canvas(props, ref) {
    const { shapes, width, height, redrawTimes } = useCanvasElement()

    const shapesNodes = useMemo(() => shapes?.map((shape, index) => {
        const Component = ShapesToComponentMap[shape.type]?.component

        if (Component === undefined) return null

        return <Component key={index} shape={shape} redrawTimes={redrawTimes} />
    }), [shapes, redrawTimes])

    return <canvas ref={ref} width={width} height={height} className={styles.canvas}>
        {shapesNodes}
    </canvas>
})