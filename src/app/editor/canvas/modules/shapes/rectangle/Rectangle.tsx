"use client"

import { useEffect } from "react"
import { useCanvas } from "@/editor/canvas/context"
import { RectangleShape } from "@/editor/canvas/modules/shapes/rectangle/RectangleShape"

export type RectangleProps = RectangleShape & {
    redrawTimes: number
}

export const Rectangle = ({ position, color, attributes, redrawTimes }: RectangleProps) => {
    const canvas = useCanvas()

    const draw = (context: CanvasRenderingContext2D) => {
        if (color)
            context.fillStyle = color
        context.fillRect(position.x, position.y, attributes.width, attributes.height)
    }

    useEffect(() => {
        const context = canvas?.ref.current?.getContext("2d")
        if (context)
            draw(context)
    }, [redrawTimes])

    return <></>
}