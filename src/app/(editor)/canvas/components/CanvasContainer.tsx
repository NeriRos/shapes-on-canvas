"use client"

import { ReactNode, useRef } from "react"
import { CanvasElement } from "@/app/(editor)/canvas/components/canvas-element/CanvasElement"
import { useCanvasProvider } from "@/app/(editor)/canvas/context/useCanvasProvider"
import { CanvasContext } from "@/app/(editor)/canvas/context/CanvasContext"
import Styles from "@/app/(editor)/canvas/components/CanvasContainer.module.css"
import { Shapes } from "@/app/(editor)/canvas/modules/shapes/types"

export type CanvasContainerProps = {
    shapes?: Shapes[],
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