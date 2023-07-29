"use client"

import styles from "./Canvas.module.css"
import { ReactNode, useRef, useState } from "react"
import { CanvasContext } from "@/app/(canvas)/components/Canvas/CanvasContext"

export type CanvasProps = {
    items: ReactNode[]
}

export const Canvas = (props: CanvasProps) => {
    const canvasRef = useRef(null)

    const [items, setItems] = useState(props.items)

    const addItem = (item: ReactNode) => {
        setItems((items) => [...items, item])
    }

    return <CanvasContext.Provider value={{ ref: canvasRef, items, addItem }}>
        <canvas ref={canvasRef} className={styles.canvas}>
            {items}
        </canvas>
    </CanvasContext.Provider>


}