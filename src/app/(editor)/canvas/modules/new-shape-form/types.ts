import { ShapesToComponentMap } from "@/app/(editor)/canvas/modules/shapes/utils/ShapesToComponentMap"
import { Shapes } from "@/app/(editor)/canvas/modules/shapes/types"

export type NewShapeFormData = {
    title: string,
    type: keyof typeof ShapesToComponentMap,
    height: number,
    width: number,
    x: number,
    y: number
} & Shapes["attributes"]
