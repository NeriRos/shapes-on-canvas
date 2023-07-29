import { SquareShape } from "@/app/(canvas)/components/Shapes/Square"

export type Shape = {
    id: string
    color: string
    position: {
        x: number
        y: number
    }
};

export type Shapes = SquareShape;