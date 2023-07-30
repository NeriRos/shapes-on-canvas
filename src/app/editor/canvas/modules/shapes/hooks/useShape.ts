import { useCanvas } from "@/editor/canvas/context"
import { useEffect, useState } from "react"
import { Shapes } from "@/editor/canvas/modules/shapes/types"

export type ShapeHookProps = {
    draw: (context: CanvasRenderingContext2D) => void,
    shape: Shapes,
    redrawTimes: number
}

export const useShape = ({ draw, redrawTimes, shape }: ShapeHookProps) => {
    const canvas = useCanvas()
    const [context, setContext] = useState<CanvasRenderingContext2D>()

    const fillColor = (context: CanvasRenderingContext2D, color: string) => {
        context.fillStyle = color
    }

    useEffect(() => {
        const context = canvas?.ref.current?.getContext("2d")
        if (context)
            setContext(context)
    }, [canvas?.ref, redrawTimes])

    useEffect(() => {
        if (context) {
            draw(context)
        }
    }, [context, draw])

    useEffect(() => {
        if (context && shape.isDragging) {
            context.clearRect(
                shape.position.x,
                shape.position.y,
                shape.attributes.width,
                shape.attributes.height,
            )
        }
    }, [context, draw, redrawTimes, shape])

    return {
        fillColor,
        context,
    }
}