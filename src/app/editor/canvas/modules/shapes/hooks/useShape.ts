import { useCanvas } from "@/editor/canvas/context"
import { useEffect, useState } from "react"
import { Shapes } from "@/editor/canvas/modules/shapes/types"

export type ShapeHookProps = {
    draw: (context: CanvasRenderingContext2D) => void,
    shape: Shapes,
    redrawTimes?: number,
}

export const useShape = ({ draw, shape, redrawTimes }: ShapeHookProps) => {
    const canvas = useCanvas()
    const [context, setContext] = useState<CanvasRenderingContext2D>()

    const fillColor = (context: CanvasRenderingContext2D, color: string) => {
        context.fillStyle = color
    }

    useEffect(() => {
        const context = canvas?.ref.current?.getContext("2d")
        if (!context) return

        setContext(context)
    }, [canvas?.ref, redrawTimes])

    useEffect(() => {
        if (!context) return

        draw(context)
    }, [context, draw, redrawTimes])

    useEffect(() => {
        if (!(context && shape.isDragging)) return

        context.clearRect(
            shape.position.x,
            shape.position.y,
            shape.attributes.width,
            shape.attributes.height,
        )
    }, [context, draw, shape])

    useEffect(() => {
        if (!(context && !shape.isDragging)) return

        context.clearRect(
            shape.position.x,
            shape.position.y,
            shape.attributes.width,
            shape.attributes.height,
        )

        draw(context)
    }, [context, draw, shape, canvas.shapes])

    return {
        fillColor,
        context,
    }
}