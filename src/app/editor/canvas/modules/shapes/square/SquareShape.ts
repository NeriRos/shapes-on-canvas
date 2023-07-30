import { Shape } from "@/editor/canvas/components/shape/Shape"

export type SquareShape = {
    type: "square"
    attributes: {
        size: number
    }
} & Shape;