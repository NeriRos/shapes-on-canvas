"use client"

import { useCanvas } from "@/editor/canvas/context"
import { MouseEvent, useEffect } from "react"
import { Shapes } from "@/editor/canvas/modules/shapes/types"
import { Position } from "@/editor/canvas/types/Shape"

export type CanvasClickListenerProps = {
    onClick?: (position: Position, shape: Shapes | null, e: MouseEvent) => void,
    onMouseDown?: (position: Position, shape: Shapes | null, e: MouseEvent) => void,
    onMouseUp?: (position: Position, shape: Shapes | null, e: MouseEvent) => void,
}

export const CanvasClickListener = (props: CanvasClickListenerProps) => {
    const { ref, shapes, addShape } = useCanvas()

    const getPosition = (e: MouseEvent) => {
        let rect = ref.current?.getBoundingClientRect()
        if (rect === undefined) throw new Error("Canvas ref is undefined")

        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        }
    }

    const getShapeOnPosition = (position: Position): Shapes | null => {
        for (let shape of shapes) {
            const attributes = shape.attributes

            const mouseInX = position.x > shape.position.x && position.x < shape.position.x + attributes.width
            const mouseInY = position.y > shape.position.y && position.y < shape.position.y + attributes.height

            if (mouseInX && mouseInY) {
                return shape
            }
        }

        return null
    }

    const onClick = (e: MouseEvent) => {
        const position = getPosition(e)
        const shape = getShapeOnPosition(position)

        props.onClick?.(position, shape, e)
    }

    const onMouseDown = (e: MouseEvent) => {
        const position = getPosition(e)
        const shape = getShapeOnPosition(position)

        props.onMouseDown?.(position, shape, e)
    }

    const onMouseUp = (e: MouseEvent) => {
        const position = getPosition(e)
        const shape = getShapeOnPosition(position)

        props.onMouseUp?.(position, shape, e)
    }

    useEffect(() => {
        if (props.onClick === undefined) return
        // @ts-ignore
        ref.current?.addEventListener("click", onClick)

        return () => {
            // @ts-ignore
            ref.current?.removeEventListener("click", onClick)
        }
    }, [props.onClick])


    useEffect(() => {
        if (props.onMouseDown === undefined) return
        // @ts-ignore
        ref.current?.addEventListener("mousedown", onMouseDown)

        return () => {
            // @ts-ignore
            ref.current?.removeEventListener("mousedown", onMouseDown)
        }
    }, [props.onMouseDown])

    useEffect(() => {
        if (props.onMouseUp === undefined) return
        // @ts-ignore
        ref.current?.addEventListener("mouseup", onMouseUp)

        return () => {
            // @ts-ignore
            ref.current?.removeEventListener("mouseup", onMouseUp)
        }
    }, [props.onMouseUp])

    return null
}