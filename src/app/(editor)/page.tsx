import React from "react"
import { FloatingMenu } from "@/app/(editor)/coordinates/components/floating-menu/FloatingMenu"
import { CanvasContainer } from "@/app/(editor)/canvas/components/CanvasContainer"
import { NewShapeFormContainer } from "@/app/(editor)/canvas/modules/new-shape-form/components/NewShapeFormContainer"
import { ViewProvider } from "@/app/view/context/ViewProvider"
import { SCREEN_EDITOR } from "@/app/view/context"
import { DragShapes } from "@/app/(editor)/canvas/modules/drag-shapes/DragShapes"

export default function Page() {
    return <ViewProvider screen={SCREEN_EDITOR}>
        <CanvasContainer>
            <FloatingMenu />
            <NewShapeFormContainer newShapeOnDoubleClick={true} />
            <DragShapes />
        </CanvasContainer>
    </ViewProvider>
}