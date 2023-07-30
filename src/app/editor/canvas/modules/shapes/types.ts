import { RectangleShape } from "@/editor/canvas/modules/shapes/rectangle"

export type Shapes = RectangleShape
export type ShapesWithoutId = Omit<Shapes, "id">
