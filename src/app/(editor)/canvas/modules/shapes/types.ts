import { RectangleShape } from "@/app/(editor)/canvas/modules/shapes/components/rectangle"

export type Shapes = RectangleShape
export type ShapesWithoutId = Omit<Shapes, "id">
