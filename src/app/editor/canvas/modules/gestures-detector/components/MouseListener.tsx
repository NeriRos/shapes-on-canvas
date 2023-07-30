"use client"

import { useCanvas } from "@/editor/canvas/context"
import { MouseEvent, useCallback, useEffect } from "react"
import { Shapes } from "@/editor/canvas/modules/shapes/types"
import { Position } from "@/editor/canvas/types/Shape"

type ListenerFunction = (position: Position, shape?: Shapes, e?: MouseEvent) => void

export type CanvasClickListenerProps = {
    onClick?: ListenerFunction
    onDoubleClick?: ListenerFunction
    onMouseDown?: ListenerFunction
    onMouseUp?: ListenerFunction
    onMouseMove?: ListenerFunction
}

export const MouseListener = (props: CanvasClickListenerProps) => {
    const { ref, shapes } = useCanvas()

    const getPosition = useCallback((e: MouseEvent) => {
        let rect = ref.current?.getBoundingClientRect()
        if (rect === undefined) throw new Error("Canvas ref is undefined")

        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        }
    }, [ref])

    const getShapeOnPosition = useCallback((position: Position): Shapes | undefined => {
        for (let shape of shapes) {
            const attributes = shape.attributes
            const mouseInX = position.x > shape.position.x && position.x < shape.position.x + attributes.width
            const mouseInY = position.y > shape.position.y && position.y < shape.position.y + attributes.height

            if (mouseInX && mouseInY) {
                return shape
            }
        }
    }, [shapes])

    const onDoubleClick = useCallback((e: MouseEvent) => {
        if (props.onDoubleClick === undefined) return

        const position = getPosition(e)
        const shape = getShapeOnPosition(position)

        props.onDoubleClick(position, shape, e)
    }, [getPosition, getShapeOnPosition, props])

    const onClick = useCallback((e: MouseEvent) => {
        if (props.onClick === undefined) return

        const position = getPosition(e)
        const shape = getShapeOnPosition(position)

        props.onClick(position, shape, e)
    }, [getPosition, getShapeOnPosition, props])

    const onMouseDown = useCallback((e: MouseEvent) => {
        if (props.onMouseDown === undefined) return

        const position = getPosition(e)
        const shape = getShapeOnPosition(position)

        props.onMouseDown(position, shape, e)
    }, [getPosition, getShapeOnPosition, props])

    const onMouseUp = useCallback((e: MouseEvent) => {
        if (props.onMouseUp === undefined) return

        const position = getPosition(e)
        const shape = getShapeOnPosition(position)

        props.onMouseUp(position, shape, e)
    }, [getPosition, getShapeOnPosition, props])

    const onMouseMove = useCallback((e: MouseEvent) => {
        if (props.onMouseMove === undefined) return

        const position = getPosition(e)
        const shape = getShapeOnPosition(position)

        props.onMouseMove(position, shape, e)
    }, [getPosition, getShapeOnPosition, props])

    useEffect(() => {
        const element = ref.current

        // @ts-ignore
        element?.addEventListener("click", onClick)

        return () => {
            // @ts-ignore
            element?.removeEventListener("click", onClick)
        }
    }, [onClick, ref])


    useEffect(() => {
        const element = ref.current

        // @ts-ignore
        element?.addEventListener("mousedown", onMouseDown)

        return () => {
            // @ts-ignore
            element?.removeEventListener("mousedown", onMouseDown)
        }
    }, [onMouseDown, ref])

    useEffect(() => {
        const element = ref.current

        // @ts-ignore
        element?.addEventListener("mouseup", onMouseUp)

        return () => {
            // @ts-ignore
            element?.removeEventListener("mouseup", onMouseUp)
        }
    }, [onMouseUp, ref])

    useEffect(() => {
        const element = ref.current

        // @ts-ignore
        element?.addEventListener("mousemove", onMouseMove)

        return () => {
            // @ts-ignore
            element?.removeEventListener("mousemove", onMouseMove)
        }
    }, [onMouseMove, ref])

    useEffect(() => {
        const element = ref.current

        // @ts-ignore
        element?.addEventListener("dblclick", onDoubleClick)

        return () => {
            // @ts-ignore
            element?.removeEventListener("dblclick", onDoubleClick)
        }
    }, [onDoubleClick, ref])

    return null
}