"use client"

import { RefObject, useState } from "react"
import { Shape } from "@/editor/canvas/components/shape/Shape"

export type CanvasProviderData = {
    shapes: Shape[]
    addShape: (item: Shape) => void
    removeShape: (id: string) => void
    ref: RefObject<HTMLCanvasElement>
}

export type CanvasProviderHookProps = {
    shapes?: Shape[],
    ref: RefObject<HTMLCanvasElement>
}

export const useCanvasProvider = (props: CanvasProviderHookProps): CanvasProviderData => {
    const [shapes, setShapes] = useState(props.shapes || [])

    const addShape = (item: Shape) => {
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