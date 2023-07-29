import { Shape } from "@/editor/canvas/components/shape/Shape"

export const SQUARE_SHAPE_TYPE = "square"

export type SquareShape = {
    type: SQUARE_SHAPE_TYPE
    attributes: {
        size: number
    }
} & Shape;