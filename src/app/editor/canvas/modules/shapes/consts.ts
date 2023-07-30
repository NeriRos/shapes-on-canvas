import { Shape } from "@/editor/canvas/components/shape/Shape"
import { ShapesWithoutId } from "@/editor/canvas/modules/shapes/types"

export const DEFAULT_SHAPE_COLOR = "rgba(9, 72, 234, 0.20)"
export const DEFAULT_SHAPE: Shape = {
    id: "",
    title: "",
    type: "square",
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
    type: "square",
    color: DEFAULT_SHAPE_COLOR,
    attributes: {
        width: 120,
        height: 120,
    },
}