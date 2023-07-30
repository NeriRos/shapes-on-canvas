import { Shape } from "@/editor/canvas/components/shape/Shape"

export const RECTANGLE_SHAPE_TYPE = "rectangle"

export type RectangleShape = {
    type: SQUARE_SHAPE_TYPE
    attributes: {
        width: number
        height: number
    }
} & Shape;