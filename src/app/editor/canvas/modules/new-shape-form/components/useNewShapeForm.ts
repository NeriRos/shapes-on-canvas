import React from "react"
import { Shapes, ShapesWithoutId } from "@/editor/canvas/modules/shapes/types"
import { isSquareShape, SHAPE_TYPE_SQUARE } from "@/editor/canvas/modules/shapes/square/consts"
import { isRectangleShape } from "@/editor/canvas/modules/shapes/rectangle/consts"
import { useCanvas } from "@/editor/canvas/context"

export const useNewShapeForm = (props: {
    initialData?: ShapesWithoutId,
}) => {
    const { addShape } = useCanvas()
    const [data, setData] = React.useState<ShapesWithoutId>(props.initialData || {
        type: SHAPE_TYPE_SQUARE,
        color: "#000000",
        title: "",
        position: {
            x: 0,
            y: 0,
        },
        attributes: {
            width: 100,
            height: 100,
        },
    })

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const data: any = Object.fromEntries(formData.entries())

        const shape: ShapesWithoutId = {
            type: data.type,
            color: data.color,
            position: {
                x: parseInt(data.x),
                y: parseInt(data.y),
            },
            title: data.title,
            attributes: setAttribute({
                type: data.type,
                attributes: data,
            }),
        }

        addShape(shape)
    }

    const changeType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setData((data) => {
            data.type = event.target.value as Shapes["type"]

            data.attributes = setAttribute(data)

            return { ...data }
        })
    }

    const setAttribute = (data: Pick<Shapes, "type" | "attributes">) => {
        if (isSquareShape(data)) {
            data.attributes = {
                size: data.attributes.width ? Number(data.attributes.width) : 100,
                width: data.attributes.width ? Number(data.attributes.width) : 100,
                height: data.attributes.height ? Number(data.attributes.height) : 100,
            }
        } else if (isRectangleShape(data)) {
            data.attributes = {
                width: data.attributes.width ? Number(data.attributes.width) : 100,
                height: data.attributes.height ? Number(data.attributes.height) : 100,
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