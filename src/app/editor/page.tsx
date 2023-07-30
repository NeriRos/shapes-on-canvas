import React from "react"
import { FloatingMenu } from "@/editor/coordinates/components/floating-menu/FloatingMenu"
import { CanvasContainer } from "@/editor/canvas/components/CanvasContainer"
import { CanvasClickListener } from "@/editor/canvas/modules/gestures-detector/components/CanvasClickListener"

export default function() {
    return <CanvasContainer>
        <FloatingMenu />
        <CanvasClickListener shape={{
            type: "square",
            color: "red",
            attributes: {
                size: 120,
            },
        }} />
    </CanvasContainer>
}