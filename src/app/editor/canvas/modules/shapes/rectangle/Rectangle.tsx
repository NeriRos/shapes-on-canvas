"use client"

import { RectangleShape } from "@/editor/canvas/modules/shapes/rectangle/RectangleShape"
import { useShape } from "@/editor/canvas/modules/shapes/hooks/useShape"
import { useCallback } from "react"

export type RectangleProps = {
    shape: RectangleShape
}

export const Rectangle = ({ shape }: RectangleProps) => {
    const draw = useCallback((context: CanvasRenderingContext2D) => {
        if (shape.color)
            context.fillStyle = shape.color
        context.fillRect(shape.position.x, shape.position.y, shape.attributes.width, shape.attributes.height)
    }, [shape])

    useShape({
        shape,
        draw,
    })

    return null
}