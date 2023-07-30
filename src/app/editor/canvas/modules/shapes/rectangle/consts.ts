import { RectangleShape } from "@/editor/canvas/modules/shapes/rectangle/RectangleShape"

export const SHAPE_TYPE_RECTANGLE: RectangleShape["type"] = "rectangle"

export const isRectangleShape = (shape: any): shape is RectangleShape => {
    return shape.type === SHAPE_TYPE_RECTANGLE
}