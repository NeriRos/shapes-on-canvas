"use client"

import { Shape } from "@/editor/canvas/components/shape/Shape"
import { useCanvas } from "@/editor/canvas/context"
import { MouseEvent, useEffect } from "react"

export type MouseMoveListenerProps = {
    action: (position: Shape["position"]) => void
}

export const MouseMoveListener = (props: MouseMoveListenerProps) => {
    const { ref } = useCanvas()

    const onMove = (e: MouseEvent) => {
        let rect = ref.current?.getBoundingClientRect()
        if (rect === undefined) throw new Error("Canvas ref is undefined")

        props.action({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        })
    }

    useEffect(() => {
        // @ts-ignore
        ref.current?.addEventListener("mousemove", onMove)

        return () => {
            // @ts-ignore
            ref.current?.removeEventListener("mousemove", onMove)
        }
    }, [])

    return <></>
}