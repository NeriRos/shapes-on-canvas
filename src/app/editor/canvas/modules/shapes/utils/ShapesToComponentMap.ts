import { Rectangle } from "@/editor/canvas/modules/shapes/components/rectangle"
import { SHAPE_TYPE_RECTANGLE } from "@/editor/canvas/modules/shapes/components/rectangle/consts"
import React from "react"


export const ShapesToComponentMap: {
    [key: string]: {
        component: React.FC<any>,
        name: string,
    }
} = {
    [SHAPE_TYPE_RECTANGLE]: {
        component: Rectangle,
        name: "Rectangle",
    },
}