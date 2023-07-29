"use client"

import { useCanvas } from "@/editor/canvas/context"
import { MouseEvent, useEffect } from "react"
import { Shapes } from "@/editor/canvas/modules/shapes/Shapes"

export type CanvasClickListenerProps = {
    shape: Omit<Shapes, "id" | "position">,
}

export const CanvasClickListener = (props: CanvasClickListenerProps) => {
    const { ref, addShape } = useCanvas()

    const onClick = (e: MouseEvent) => {
        let rect = ref.current.getBoundingClientRect()
        let x = e.clientX - rect.left
        let y = e.clientY - rect.top

        addShape({
            ...props.shape,
            position: {
                x,
                y,
            },
        })
    }

    useEffect(() => {
        ref.current?.addEventListener("click", onClick)

        return () => {
            ref.current?.removeEventListener("click", onClick)
        }
    }, [])

    return <></>
}