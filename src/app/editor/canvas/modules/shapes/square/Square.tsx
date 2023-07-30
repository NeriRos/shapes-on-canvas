"use client"

import { useEffect } from "react"
import { SquareShape } from "@/editor/canvas/modules/shapes/square/SquareShape"
import { useCanvas } from "@/editor/canvas/context"

export type SquareProps = SquareShape & {
    redrawTimes: number
}

export const Square = ({ position, color, attributes, id, redrawTimes }: SquareProps) => {
    const canvas = useCanvas()

    const draw = (context: CanvasRenderingContext2D) => {
        if (color)
            context.fillStyle = color
        context.fillRect(position.x, position.y, attributes.size, attributes.size)
    }

    useEffect(() => {
        const context = canvas?.ref.current?.getContext("2d")

        if (context)
            draw(context)
    }, [redrawTimes])

    return <></>
}