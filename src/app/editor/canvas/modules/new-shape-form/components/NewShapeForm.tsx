import React from "react"
import { ShapesWithoutId } from "@/editor/canvas/modules/shapes/types"
import Styles from "./NewShapeForm.module.css"
import { ShapesToComponentMap } from "@/editor/canvas/modules/shapes/ShapesToComponentMap"
import { useNewShapeForm } from "@/editor/canvas/modules/new-shape-form/components/useNewShapeForm"
import { Button } from "@/core/components/button"
import { TEXTS } from "@/editor/canvas/modules/new-shape-form/components/consts"

export type NewShapeFormProps = {
    onSubmit: () => void,
    initialData?: ShapesWithoutId,
}

export const NewShapeForm = (props: NewShapeFormProps) => {
    const { data, changeType, onSubmit } = useNewShapeForm({
        initialData: props.initialData,
        onSubmit: props.onSubmit,
    })

    const shapes = Object.entries(ShapesToComponentMap).map(([key, value]) => {
        return {
            key,
            name: value.name,
        }
    })

    return (
        <form className={Styles.form} onSubmit={onSubmit}>
            <label>
                <span>{TEXTS.FIELDS.TITLE.LABEL}</span>
                <input required type="text" name="title" defaultValue={data?.title}
                       placeholder={TEXTS.FIELDS.TITLE.PLACEHOLDER} />
            </label>
            {shapes.length > 1 ? <label>
                <span>{TEXTS.FIELDS.TYPE.LABEL}</span>
                <select required name={"type"} defaultValue={data?.type} onChange={changeType}>
                    {shapes.map((shape) =>
                        <option key={shape.key} value={shape.key}>{shape.name}</option>)}
                </select>
            </label> : <input type="hidden" name="type" defaultValue={data?.type} />}
            <div className={Styles.row}>
                {Object.keys(data?.attributes || {}).map((key) => {
                    const keyUpper = key.toUpperCase() as keyof typeof TEXTS.FIELDS.ATTRIBUTES
                    const attribute = TEXTS.FIELDS.ATTRIBUTES[keyUpper]
                    if (!attribute) {
                        return null
                    }

                    return (
                        <label key={key}>
                            <span>{attribute.LABEL}</span>
                            <input required type="number" name={key}
                                   placeholder={attribute.PLACEHOLDER}
                                   defaultValue={(data as any).attributes[key]} />
                        </label>
                    )
                })}
            </div>
            <div className={Styles.row}>
                <label>
                    <span>{TEXTS.FIELDS.X.LABEL}</span>
                    <input required type="number" name="x" defaultValue={data?.position?.x}
                           placeholder={TEXTS.FIELDS.X.PLACEHOLDER} />
                </label>
                <label>
                    <span>{TEXTS.FIELDS.Y.LABEL}</span>
                    <input required type="number" name="y" defaultValue={data?.position?.y}
                           placeholder={TEXTS.FIELDS.Y.PLACEHOLDER} />
                </label>
            </div>
            <Button type={"submit"}>
                {TEXTS.SUBMIT_BUTTON}
            </Button>
        </form>
    )
}