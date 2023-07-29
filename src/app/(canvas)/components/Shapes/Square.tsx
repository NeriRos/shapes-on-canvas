"use client"

import { useCanvas } from "@/app/(canvas)/components/Canvas/CanvasContext"
import { useEffect, useRef } from "react"

export type SquareProps = {
    x: number,
    y: number,
    size: number,
    color: string
}

export const Square = (props: SquareProps) => {
    const canvas = useCanvas()

    const draw = (context: CanvasRenderingContext2D) => {
        context.fillStyle = props.color
        context.fillRect(props.x, props.y, props.size, props.size)
    }

    useEffect(() => {
        const context = canvas?.ref.current?.getContext("2d")

        draw(context)
    }, [])

    return <></>
}