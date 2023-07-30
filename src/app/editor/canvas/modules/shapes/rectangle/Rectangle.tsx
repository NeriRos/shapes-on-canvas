"use client"

import { RectangleShape } from "@/editor/canvas/modules/shapes/rectangle/RectangleShape"
import { useShape } from "@/editor/canvas/modules/shapes/hooks/useShape"

export type RectangleProps = RectangleShape & {
    redrawTimes: number
}

export const Rectangle = ({ position, color, attributes, redrawTimes }: RectangleProps) => {
    useShape({
        redrawTimes,
        draw: (context) => {
            if (color)
                context.fillStyle = color
            context.fillRect(position.x, position.y, attributes.width, attributes.height)
        },
    })

    return <></>
}