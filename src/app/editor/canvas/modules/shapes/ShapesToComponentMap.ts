import { Square, SQUARE_SHAPE_TYPE } from "@/editor/canvas/modules/shapes/square"
import { Rectangle, RECTANGLE_SHAPE_TYPE } from "@/editor/canvas/modules/shapes/rectangle"

export const ShapesToComponentMap = {
    [SQUARE_SHAPE_TYPE]: {
        component: Square,
        name: "Square",
    },
    [RECTANGLE_SHAPE_TYPE]: {
        component: Rectangle,
        name: "Rectangle",
    },
}