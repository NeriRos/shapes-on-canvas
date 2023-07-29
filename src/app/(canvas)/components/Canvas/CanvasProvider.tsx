"use client"

import { ReactNode, useRef } from "react"
import { Canvas } from "@/app/(canvas)/components/Canvas/Canvas"
import { Shapes } from "@/app/(canvas)/components/Shapes/Shapes"
import { useCanvasProvider } from "@/app/(canvas)/components/Canvas/useCanvasProvider"
import { CanvasContext } from "@/app/(canvas)/components/Canvas/CanvasContext"

export type CanvasContainerProps = {
    shapes: Shapes[],
    children: ReactNode
}

export const CanvasProvider = (props: CanvasContainerProps) => {
    const canvasRef = useRef(null)
    const providerData = useCanvasProvider({ ref: canvasRef, shapes: props.shapes })

    return <CanvasContext.Provider value={providerData}>
        <Canvas ref={canvasRef} />
        {props.children}
    </CanvasContext.Provider>
}