"use client"

import styles from "./Canvas.module.css"
import { ReactNode, useRef } from "react"
import { useWindowDimensions } from "@/core/hooks/useWindowDimensions"

export type CanvasProps = {
    children?: ReactNode
}
export const Canvas = (props: CanvasProps) => {
    const canvasRef = useRef(null)
    const dimensions = useWindowDimensions()

    return <canvas ref={canvasRef} className={styles.canvas} width={dimensions.width} height={dimensions.height}>
        {props.children}
    </canvas>
}