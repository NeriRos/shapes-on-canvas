import { useCanvas } from "@/app/(editor)/canvas/context"
import { useWindowDimensions } from "@/core/hooks/useWindowDimensions"
import { useEffect, useState } from "react"
import { REDRAW_MILLISECONDS } from "@/app/(editor)/canvas/components/canvas-element/consts"

export const useCanvasElement = () => {
    const { shapes } = useCanvas()
    const { width, height } = useWindowDimensions()
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