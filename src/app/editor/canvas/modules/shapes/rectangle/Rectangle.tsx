"use client"

import { RectangleShape } from "@/editor/canvas/modules/shapes/rectangle/RectangleShape"
import { useShape } from "@/editor/canvas/modules/shapes/hooks/useShape"

export type RectangleProps = {
    redrawTimes: number,
    shape: RectangleShape
}

export const Rectangle = ({ shape, redrawTimes }: RectangleProps) => {
    useShape({
        redrawTimes,
        shape,
        draw: (context) => {
            if (shape.color)
                context.fillStyle = shape.color
            context.fillRect(shape.position.x, shape.position.y, shape.attributes.width, shape.attributes.height)
        },
    })

    return null
}