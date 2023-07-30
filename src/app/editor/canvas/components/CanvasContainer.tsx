"use client"

import { ReactNode, useRef } from "react"
import { Shape } from "@/editor/canvas/types/Shape"
import { CanvasElement } from "@/editor/canvas/components/canvas-element/CanvasElement"
import { useCanvasProvider } from "@/editor/canvas/context/useCanvasProvider"
import { CanvasContext } from "@/editor/canvas/context/CanvasContext"
import Styles from "@/editor/canvas/components/CanvasContainer.module.css"

export type CanvasContainerProps = {
    shapes?: Shape[],
    children?: ReactNode
}

export const CanvasContainer = (props: CanvasContainerProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const providerData = useCanvasProvider({ ref: canvasRef, shapes: props.shapes })

    return <div className={Styles.container}>
        <CanvasContext.Provider value={providerData}>
            <CanvasElement ref={canvasRef} />
            {props.children}
        </CanvasContext.Provider>
    </div>
}