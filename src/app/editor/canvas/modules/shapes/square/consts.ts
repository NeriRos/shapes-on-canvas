import { SquareShape } from "@/editor/canvas/modules/shapes/square/SquareShape"

export const SHAPE_TYPE_SQUARE: SquareShape["type"] = "square"

export const isSquareShape = (shape: any): shape is SquareShape => {
    return shape.type === SHAPE_TYPE_SQUARE
}