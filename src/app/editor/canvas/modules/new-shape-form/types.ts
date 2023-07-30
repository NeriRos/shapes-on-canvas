import { ShapesToComponentMap } from "@/editor/canvas/modules/shapes/ShapesToComponentMap"
import { Shapes } from "@/editor/canvas/modules/shapes/types"

export type NewShapeFormData = {
    title: string,
    type: keyof typeof ShapesToComponentMap,
    height: number,
    width: number,
    x: number,
    y: number
} & Shapes["attributes"]
