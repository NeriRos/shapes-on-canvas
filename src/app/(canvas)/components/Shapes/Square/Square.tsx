"use client"

import { useCanvas } from "@/app/(canvas)/components/Canvas/CanvasContext"
import { useEffect } from "react"
import { SquareShape } from "@/app/(canvas)/components/Shapes/Square/SquareShape"

export const Square = ({ position, color, attributes, id }: SquareShape) => {
    const canvas = useCanvas()

    const draw = (context: CanvasRenderingContext2D) => {
        context.fillStyle = color
        context.fillRect(position.x, position.y, attributes.size, attributes.size)
    }

    useEffect(() => {
        const context = canvas?.ref.current?.getContext("2d")

        draw(context)
    }, [])

    return <></>
}