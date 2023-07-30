import React from "react"
import { Shapes, ShapesWithoutId } from "@/editor/canvas/modules/shapes/types"
import Styles from "./NewShapeForm.module.css"
import { ShapesToComponentMap } from "@/editor/canvas/modules/shapes/ShapesToComponentMap"
import { useNewShapeForm } from "@/editor/canvas/modules/new-shape-form/components/useNewShapeForm"

export type NewShapeFormProps = {
    onSubmit: (formData: Shapes) => void,
    initialData?: ShapesWithoutId,
    onClose: () => void,
}

export const NewShapeForm = (props: NewShapeFormProps) => {
    const { data, changeType, onSubmit } = useNewShapeForm({ initialData: props.initialData })

    return (
        <form className={Styles.form} onSubmit={onSubmit}>
            <button className={Styles.closeButton} onClick={props.onClose}>Close</button>
            <label>
                <span>Title</span>
                <input type="text" name="title" defaultValue={data?.title} />
            </label>
            <label>
                <span>Type</span>
                <select name={"type"} defaultValue={data?.type} onChange={changeType}>
                    {Object.entries(ShapesToComponentMap).map(([key, value]) =>
                        <option key={key} value={key}>{value.name}</option>)}
                </select>
            </label>
            <div className={Styles.row}>
                {Object.keys(data?.attributes || {}).map((key) => {
                    return (
                        <label key={key}>
                            <span>{key}</span>
                            <input type="number" name={key} defaultValue={(data as any).attributes[key]} />
                        </label>
                    )
                })}
            </div>
            <div className={Styles.row}>
                <label>
                    <span>X</span>
                    <input type="number" name="x" defaultValue={data?.position?.x} />
                </label>
                <label>
                    <span>Y</span>
                    <input type="number" name="y" defaultValue={data?.position?.y} />
                </label>
            </div>
            <button type={"submit"}>
                Add
            </button>
        </form>
    )
}