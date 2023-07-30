"use client"

import { Position, Shape } from "@/editor/canvas/types/Shape"
import { useCanvas } from "@/editor/canvas/context"
import { useRef } from "react"
import { MouseListener } from "@/editor/canvas/modules/gestures-detector/components/MouseListener"

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

            const mouseInX = mouseX > position.x && mouseX < position.x + attributes.width
            const mouseInY = mouseY > position.y && mouseY < position.y + attributes.height

            if (mouseInX && mouseInY) {
                const relativeX = mouseX - position.x
                const relativeY = mouseY - position.y

                if (prevShapeId.current !== shape.id) {
                    prevShapeId.current = shape.id
                    props.onShapeChange?.(shape)
                }

                props.onMove(relativeX, relativeY)

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