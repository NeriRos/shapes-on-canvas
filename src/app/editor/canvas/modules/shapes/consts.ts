import { Shapes, ShapesWithoutId } from "@/editor/canvas/modules/shapes/types"

export const DEFAULT_SHAPE_COLOR = "rgba(9, 72, 234, 0.20)"
export const DEFAULT_SHAPE: Shapes = {
    id: "",
    title: "",
    type: "rectangle",
    color: DEFAULT_SHAPE_COLOR,
    position: {
        x: 0,
        y: 0,
    },
    attributes: {
        width: 120,
        height: 120,
    },
}

export const EMPTY_SHAPE: Omit<ShapesWithoutId, "position"> = {
    title: "",
    type: "rectangle",
    color: DEFAULT_SHAPE_COLOR,
    attributes: {
        width: 120,
        height: 120,
    },
}