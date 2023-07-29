"use client"

import { useCanvas } from "@/editor/canvas/context"
import { MouseEvent, useEffect } from "react"
import { Shapes } from "@/editor/canvas/modules/shapes/Shapes"

export type CanvasClickListenerProps = {
    shape: Omit<Shapes, "id" | "position">,
    action: (shape: Omit<Shapes, "id">) => void
}

export const CanvasClickListener = (props: CanvasClickListenerProps) => {
    const { ref, addShape } = useCanvas()

    const onClick = (e: MouseEvent) => {
        let rect = ref.current.getBoundingClientRect()
        const shape: Shapes = {
            ...props.shape,
            position: {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            },
        }

        props.action(shape)
    }

    useEffect(() => {
        ref.current?.addEventListener("click", onClick)

        return () => {
            ref.current?.removeEventListener("click", onClick)
        }
    }, [])

    return <></>
}