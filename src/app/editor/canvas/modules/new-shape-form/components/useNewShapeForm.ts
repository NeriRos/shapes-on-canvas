import React from "react"
import { Shapes, ShapesWithoutId } from "@/editor/canvas/modules/shapes/types"
import { isSquareShape, SHAPE_TYPE_SQUARE } from "@/editor/canvas/modules/shapes/square/consts"
import { isRectangleShape } from "@/editor/canvas/modules/shapes/rectangle/consts"

export const useNewShapeForm = (props: {
    initialData?: ShapesWithoutId,
    onSubmit: (data: Shapes) => void,
}) => {
    const [data, setData] = React.useState<ShapesWithoutId>(props.initialData || {
        type: SHAPE_TYPE_SQUARE,
        color: "#000000",
        title: "",
        position: {
            x: 0,
            y: 0,
        },
        attributes: {
            size: 100,
        },
    })

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const data = Object.fromEntries(formData.entries())
        console.log(data)
        //
        // const shape: Shapes = {
        //     type: data.type,
        //     position: {
        //         x: parseInt(data.x),
        //         y: parseInt(data.y),
        //     },
        //     title: data.title,
        // }
        //
        // shape.attributes = setAttribute(data)
        //
        // props.onSubmit(shape)
    }

    const changeType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setData((data) => {
            data.type = event.target.value as Shapes["type"]

            data.attributes = setAttribute(data)

            return { ...data }
        })
    }

    const setAttribute = (data: ShapesWithoutId) => {
        if (isSquareShape(data)) {
            data.attributes = {
                size: data.attributes.size ? data.attributes.size : 100,
            }
        } else if (isRectangleShape(data)) {
            data.attributes = {
                width: data.attributes.width ? data.attributes.width : 100,
                height: data.attributes.height ? data.attributes.height : 100,
            }
        }

        return data.attributes
    }

    return {
        data,
        onSubmit,
        changeType,
    }
}