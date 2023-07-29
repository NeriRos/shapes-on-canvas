"use client"

import styles from "./Canvas.module.css"
import { ReactNode, useRef } from "react"

export type CanvasProps = {
    children?: ReactNode
}
export const Canvas = (props: CanvasProps) => {
    const canvasRef = useRef(null)

    return <canvas ref={canvasRef} className={styles.canvas}>
        {props.children}
    </canvas>
}