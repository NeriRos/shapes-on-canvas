"use client"

import { RefObject, useState } from "react"
import { Shapes, ShapesWithoutId } from "@/app/(editor)/canvas/modules/shapes/types"

export type CanvasProviderData = {
    shapes: Shapes[]
    addShape: (item: ShapesWithoutId) => void
    updateShape: (item: Shapes) => void
    removeShape: (id: string) => void
    ref: RefObject<HTMLCanvasElement>
}

export type CanvasProviderHookProps = {
    shapes?: Shapes[],
    ref: RefObject<HTMLCanvasElement>
}

export const useCanvasProvider = (props: CanvasProviderHookProps): CanvasProviderData => {
    const [shapes, setShapes] = useState(props.shapes || [])

    const addShape = (item: ShapesWithoutId) => {
        setShapes((items) => {
            const id = Math.random().toString(36).substring(2, 9)

            return [...items, { ...item, id }]
        })
    }

    const removeShape = (id: string) => {
        setShapes((items) => [...items.filter((item) => item.id !== id)])
    }

    const updateShape = (item: Shapes) => {
        setShapes((items) => [...items.map((i) => i.id === item.id ? item : i)])
    }

    return {
        shapes,
        addShape,
        updateShape,
        removeShape,
        ref: props.ref,
    }
}