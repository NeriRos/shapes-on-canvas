"use client"

import { CanvasClickListener } from "@/editor/canvas/modules/gestures-detector/components/CanvasClickListener"
import React, { useState } from "react"
import { Shapes } from "@/editor/canvas/modules/shapes/Shapes"
import { NewShapeForm } from "@/editor/canvas/modules/new-shape-form/components/NewShapeForm"
import Styles from "./NewShapeForm.module.css"
import clsx from "clsx"
import { useCanvas } from "@/editor/canvas/context"
import { useView } from "@/app/view/context"
import { POPUPS } from "@/app/view/context/consts"

export const NewShapeFormContainer = () => {
    const { addShape } = useCanvas()
    const [shape, setShape] = useState<Shapes>()
    const { displayPopup, popupView } = useView()

    const showForm = (shape: Shapes) => {
        setShape(shape)
        displayPopup(POPUPS.NEW_SHAPE_FORM)
    }

    const handleOutsideClick = (e) => {
        if (e.target !== e.currentTarget) return

        close()
    }

    const onSubmit = (data: Shapes) => {
        addShape(data)
        close()
    }

    const close = () => {
        displayPopup(POPUPS.NONE)
    }

    const show = popupView == POPUPS.NEW_SHAPE_FORM;

    return (
        <div className={clsx([Styles.formContainer, show && Styles.active])} onClick={handleOutsideClick}>
            {show ?
                <NewShapeForm onClose={close} onSubmit={onSubmit} initialData={shape} /> : null}
            <CanvasClickListener action={showForm} shape={{
                type: "square",
                color: "red",
                attributes: {
                    size: 120,
                },
            }} />
        </div>
    )
}