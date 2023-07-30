import { Shape } from "@/editor/canvas/components/shape/Shape"

export type RectangleShape = {
    type: "rectangle"
    attributes: {
        width: number
        height: number
    }
} & Shape;