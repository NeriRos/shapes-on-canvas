import { SquareShape } from "@/editor/canvas/modules/shapes/square"
import { RectangleShape } from "@/editor/canvas/modules/shapes/rectangle"

export type Shapes = SquareShape | RectangleShape
export type ShapesWithoutId = Omit<Shapes, "id">
