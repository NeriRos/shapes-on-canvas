"use client"

import { Shape } from "@/editor/canvas/components/shape/Shape"
import { useCanvas } from "@/editor/canvas/context"
import { MouseEvent, useEffect, useRef } from "react"

export type MouseMoveListenerProps = {
    onMove: (position: Shape["position"]) => void
    onShapeChange?: (shape: Shape) => void
}

export const ShapeMouseMovementListener = (props: MouseMoveListenerProps) => {
    const { ref, shapes } = useCanvas()
    const prevShapeId = useRef<string>()

    const onMove = (e: MouseEvent) => {
        let rect = ref.current?.getBoundingClientRect()
        if (rect === undefined) throw new Error("Canvas ref is undefined")

        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

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

                props.onMove({
                    x: relativeX,
                    y: relativeY,
                })
            }
        }
    }

    useEffect(() => {
        // @ts-ignore
        ref.current?.addEventListener("mousemove", onMove)

        return () => {
            // @ts-ignore
            ref.current?.removeEventListener("mousemove", onMove)
        }
    }, [shapes])

    return null
}