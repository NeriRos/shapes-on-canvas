import { Shape } from "@/app/(editor)/canvas/types/Shape"

export type RectangleShape = {
    type: "rectangle"
    attributes: {
        width: number
        height: number
    }
} & Shape;