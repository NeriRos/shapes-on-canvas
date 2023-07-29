import { SquareShape } from "@/editor/canvas/components/shapes/square"

export type Shape = {
    id: string
    color: string
    position: {
        x: number
        y: number
    }
};

export type Shapes = SquareShape;