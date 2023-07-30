"use client"

import { Position } from "@/editor/canvas/types/Shape"
import { MouseListener } from "@/editor/canvas/modules/gestures-detector/components/MouseListener"
import { Shapes } from "@/editor/canvas/modules/shapes/types"
import { useCanvas } from "@/editor/canvas/context"
import { useState } from "react"

export const DragShapes = () => {
    const { updateShape } = useCanvas()
    const [draggedShape, setDraggedShape] = useState<Shapes>()

    const onMouseDown = (position: Position, shape?: Shapes) => {
        if (shape === undefined) return

        const newShape: Shapes = {
            ...shape,
            isDragging: true,
        }

        updateShape(newShape)
        setDraggedShape(newShape)
    }

    const onMouseMove = (position: Position) => {
        if (!draggedShape?.isDragging) return

        const newShape: Shapes = {
            ...draggedShape,
            position: {
                x: position.x - draggedShape.attributes.width / 2,
                y: position.y - draggedShape.attributes.height / 2,
            },
        }

        updateShape(newShape)
        setDraggedShape(newShape)
    }

    const onMouseUp = (position: Position) => {
        console.log("mouse up", position)

        if (draggedShape === undefined) return

        updateShape({
            ...draggedShape,
            isDragging: false,
        })
        setDraggedShape(undefined)
    }

    return <>
        <MouseListener onMouseMove={onMouseMove} onMouseDown={onMouseDown} onMouseUp={onMouseUp} />
    </>
}