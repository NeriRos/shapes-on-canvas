import { Shape } from "@/app/(canvas)/components/Shapes/Shapes"

export const SQUARE_SHAPE_TYPE = "square"

export type SquareShape = {
    type: SQUARE_SHAPE_TYPE
    attributes: {
        size: number
    }
} & Shape;