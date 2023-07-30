"use client"

import { CanvasClickListener } from "@/editor/canvas/modules/gestures-detector/components/CanvasClickListener"
import React, { MouseEvent, useState } from "react"
import { ShapesWithoutId } from "@/editor/canvas/modules/shapes/types"
import { NewShapeForm } from "@/editor/canvas/modules/new-shape-form/components/NewShapeForm"
import Styles from "./NewShapeForm.module.css"
import clsx from "clsx"
import { useCanvas } from "@/editor/canvas/context"
import { POPUP_NEW_SHAPE_FORM, useView } from "@/app/view/context"

export const NewShapeFormContainer = (props: { listenToCanvasClick?: boolean }) => {
    const { addShape } = useCanvas()
    const [shape, setShape] = useState<ShapesWithoutId>()
    const { togglePopup, popupView } = useView()

    const showForm = (shape: ShapesWithoutId) => {
        setShape(shape)
        togglePopup(POPUP_NEW_SHAPE_FORM, true)
    }

    const handleOutsideClick = (e: MouseEvent) => {
        if (e.target !== e.currentTarget) return

        close()
    }

    const onSubmit = () => {
        close()
    }

    const close = () => {
        togglePopup(null)
    }

    const show = popupView == POPUP_NEW_SHAPE_FORM

    return (
        <div className={clsx([Styles.formContainer, show && Styles.active])} onClick={handleOutsideClick}>
            {show ?
                <NewShapeForm onClose={close} onSubmit={onSubmit} initialData={shape} /> : null}
            {props.listenToCanvasClick ? <CanvasClickListener action={showForm} shape={{
                title: "",
                type: "square",
                color: "red",
                attributes: {
                    width: 120,
                    height: 120,
                },
            }} /> : null}
        </div>
    )
}