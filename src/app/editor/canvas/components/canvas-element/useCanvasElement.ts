import { useCanvas } from "@/editor/canvas/context"
import { useElementDimensions } from "@/core/hooks/useElementDimensions"
import { useEffect, useState } from "react"
import { REDRAW_MILLISECONDS } from "@/editor/canvas/components/canvas-element/consts"

export const useCanvasElement = () => {
    const { shapes } = useCanvas()
    const { width, height } = useElementDimensions(window)
    const [redrawTimes, setRedrawTimes] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setRedrawTimes((redrawTimes) => redrawTimes + 1)
        }, REDRAW_MILLISECONDS)

        return () => clearTimeout(timer)
    }, [width, height])

    return {
        shapes,
        redrawTimes,
        height,
        width,
    }
}