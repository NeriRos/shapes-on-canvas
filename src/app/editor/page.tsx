import React from "react"
import { FloatingMenu } from "@/editor/coordinates/components/floating-menu/FloatingMenu"
import { CanvasContainer } from "@/editor/canvas/components/CanvasContainer"
import { NewShapeFormContainer } from "@/editor/canvas/modules/new-shape-form/components/NewShapeFormContainer"
import { ViewProvider } from "@/app/view/context/ViewProvider"
import { SCREENS } from "@/app/view/context"

export default function() {
    return <ViewProvider screen={SCREENS.EDITOR}>
        <CanvasContainer>
            <FloatingMenu />
            <NewShapeFormContainer />
        </CanvasContainer>
    </ViewProvider>
}