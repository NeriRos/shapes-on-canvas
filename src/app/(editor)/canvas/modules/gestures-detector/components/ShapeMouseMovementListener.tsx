"use client"

import { Position, Shape } from "@/app/(editor)/canvas/types/Shape"
import { useCanvas } from "@/app/(editor)/canvas/context"
import { useRef } from "react"
import { MouseListener } from "@/app/(editor)/canvas/modules/gestures-detector/components/MouseListener"

export type MouseMoveListenerProps = {
    onMove: (x: number, y: number) => void
    onLeave?: (x: number, y: number) => void
    onShapeChange?: (shape: Shape) => void
}

export const ShapeMouseMovementListener = (props: MouseMoveListenerProps) => {
    const { shapes } = useCanvas()
    const prevShapeId = useRef<string>()

    const onMove = (position: Position) => {
        const mouseX = position.x
        const mouseY = position.y

        let hoveredOnShape = false

        for (let shape of shapes) {
            const position = shape.position
            const attributes = shape.attributes

            const mouseInWidthBoundary = mouseX > position.x && mouseX < position.x + attributes.width
            const mouseInHeightBoundary = mouseY > position.y && mouseY < position.y + attributes.height

            if (mouseInWidthBoundary && mouseInHeightBoundary) {
                if (prevShapeId.current !== shape.id) {
                    prevShapeId.current = shape.id
                    props.onShapeChange?.(shape)
                }

                const relativeXLeft = mouseX - position.x
                const relativeYBottom = Math.abs(mouseY - position.y - shape.attributes.height)

                const relativeXPercent = Math.round(relativeXLeft / shape.attributes.width * 100)
                const relativeYPercent = Math.round(relativeYBottom / shape.attributes.height * 100)

                props.onMove(relativeXPercent, relativeYPercent)

                hoveredOnShape = true
            }
        }

        if (!hoveredOnShape) {
            prevShapeId.current = undefined
            props.onLeave?.(mouseX, mouseY)
        }
    }

    return <MouseListener onMouseMove={onMove} />
}