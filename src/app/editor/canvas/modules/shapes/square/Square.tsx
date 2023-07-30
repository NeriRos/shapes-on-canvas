"use client"

import { useEffect } from "react"
import { SquareShape } from "@/editor/canvas/modules/shapes/square/SquareShape"
import { useCanvas } from "@/editor/canvas/context"

export type SquareProps = SquareShape & {
    redrawTimes: number
}

export const Square = ({ position, color, attributes, id, redraw }: SquareProps) => {
    const canvas = useCanvas()

    const draw = (context: CanvasRenderingContext2D) => {
        context.fillStyle = color
        context.fillRect(position.x, position.y, attributes.size, attributes.size)
    }

    useEffect(() => {
        const context = canvas?.ref.current?.getContext("2d")

        draw(context)
    }, [redraw])

    return <></>
}