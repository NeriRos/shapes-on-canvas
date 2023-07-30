import { SquareShape } from "@/editor/canvas/modules/shapes/square"

export type Shape = {
    id: string
    color: string
    position: {
        x: number
        y: number
    }
};

export type Shape = SquareShape;