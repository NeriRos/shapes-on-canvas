import React from "react"
import { FloatingMenu } from "@/editor/coordinates/components/floating-menu/FloatingMenu"
import { CanvasContainer } from "@/editor/canvas/components/CanvasContainer"

export default function() {
    return <CanvasContainer>
        <FloatingMenu />
    </CanvasContainer>
}