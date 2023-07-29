"use client"

import { RefObject, useState } from "react"
import { Shapes } from "@/editor/canvas/components/shapes/Shapes"

export type CanvasProviderData = {
    shapes: Shapes[]
    addShape: (item: Shapes) => void
    removeShape: (id: string) => void
    ref: RefObject<HTMLCanvasElement>
}

export type CanvasProviderHookProps = {
    shapes?: Shapes[],
    ref: RefObject<HTMLCanvasElement>
}

export const useCanvasProvider = (props: CanvasProviderHookProps): CanvasProviderData => {
    const [shapes, setShapes] = useState(props.shapes)

    const addShape = (item: Shapes) => {
        setShapes((items) => [...items, item])
    }

    const removeShape = (id: string) => {
        setShapes((items) => items.filter((item) => item.id !== id))
    }

    return {
        shapes,
        addShape,
        removeShape,
        ref: props.ref,
    }
}