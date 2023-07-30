"use client"

import { SquareShape } from "@/editor/canvas/modules/shapes/square/SquareShape"
import { useShape } from "@/editor/canvas/modules/shapes/hooks/useShape"

export type SquareProps = SquareShape & {
    redrawTimes: number
}

export const Square = ({ position, color, attributes, id, redrawTimes }: SquareProps) => {
    useShape({
        redrawTimes,
        draw: (context) => {
            if (color)
                context.fillStyle = color
            context.fillRect(position.x, position.y, attributes.size, attributes.size)
        },
    })

    return null
}