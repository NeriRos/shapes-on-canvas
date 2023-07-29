import React from "react"
import { Shapes } from "@/editor/canvas/modules/shapes/Shapes"
import { SQUARE_SHAPE_TYPE } from "@/editor/canvas/modules/shapes/square"
import { RECTANGLE_SHAPE_TYPE } from "@/editor/canvas/modules/shapes/rectangle"
import { NewShapeFormData } from "@/editor/canvas/modules/new-shape-form/components/NewShapeForm"

export const useNewShapeForm = (props: {
    initialData: Shapes,
    onSubmit: (data: Shapes) => void,
}) => {
    const [data, setData] = React.useState<Shapes>(props.initialData || {
        type: SQUARE_SHAPE_TYPE,
        attributes: {
            size: 100,
        },
    })

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data: NewShapeFormData = {}

        for (const element of event.currentTarget.elements) {
            if (element instanceof HTMLInputElement || element instanceof HTMLSelectElement) {
                data[element.name] = element.value
            }
        }

        const shape: Shapes = {
            type: data.type,
            position: {
                x: parseInt(data.x),
                y: parseInt(data.y),
            },
            title: data.title,
        }

        shape.attributes = setAttribute(data)

        props.onSubmit(shape)
    }

    const changeType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setData((data) => {
            data.type = event.target.value

            data.attributes = setAttribute(data)

            return { ...data }
        })
    }

    const setAttribute = (data: NewShapeFormData) => {
        const dataWithAttributes: NewShapeFormData & { attributes: Shapes["attributes"] } = data

        switch (dataWithAttributes.type) {
            case SQUARE_SHAPE_TYPE:
                dataWithAttributes.attributes = {
                    size: data.size ? parseInt(data.size) : 100,
                }
                break
            case RECTANGLE_SHAPE_TYPE:
                dataWithAttributes.attributes = {
                    width: data.width ? parseInt(data.width) : 100,
                    height: data.height ? parseInt(data.height) : 100,
                }
                break
            default:
                dataWithAttributes.attributes = {}
        }

        return dataWithAttributes.attributes
    }

    return {
        data,
        onSubmit,
        changeType,
    }
}