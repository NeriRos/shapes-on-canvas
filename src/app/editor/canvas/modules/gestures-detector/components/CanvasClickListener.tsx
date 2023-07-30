"use client"

import { useCanvas } from "@/editor/canvas/context"
import { MouseEvent, useEffect } from "react"
import { ShapesWithoutId } from "@/editor/canvas/modules/shapes/types"
import { EMPTY_SHAPE } from "@/editor/canvas/modules/shapes/consts"

export type CanvasClickListenerProps = {
    shape?: Omit<ShapesWithoutId, "position">,
    action: (shape: ShapesWithoutId) => void
}

export const CanvasClickListener = (props: CanvasClickListenerProps) => {
    const { ref, addShape } = useCanvas()

    const onClick = (e: MouseEvent) => {
        let rect = ref.current?.getBoundingClientRect()
        if (rect === undefined) throw new Error("Canvas ref is undefined")

        const shape: ShapesWithoutId = {
            ...props.shape || EMPTY_SHAPE,
            position: {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            },
        }

        props.action(shape)
    }

    useEffect(() => {
        // @ts-ignore
        ref.current?.addEventListener("click", onClick)

        return () => {
            // @ts-ignore
            ref.current?.removeEventListener("click", onClick)
        }
    }, [])

    return null
}