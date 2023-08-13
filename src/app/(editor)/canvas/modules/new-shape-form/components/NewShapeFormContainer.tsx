"use client"

import { MouseListener } from "@/app/(editor)/canvas/modules/gestures-detector/components/MouseListener"
import React, { MouseEvent, useState } from "react"
import { ShapesWithoutId } from "@/app/(editor)/canvas/modules/shapes/types"
import { NewShapeForm } from "@/app/(editor)/canvas/modules/new-shape-form/components/NewShapeForm"
import Styles from "./NewShapeFormContainer.module.css"
import clsx from "clsx"
import { POPUP_NEW_SHAPE_FORM, useView } from "@/app/view/context"
import { CloseButton } from "@/core/components/button"
import { DEFAULT_SHAPE } from "@/app/(editor)/canvas/modules/shapes/consts"
import { Position } from "@/app/(editor)/canvas/types/Shape"
import { useCanvas } from "@/app/(editor)/canvas/context"

export const NewShapeFormContainer = (props: { newShapeOnDoubleClick?: boolean }) => {
    const { addShape } = useCanvas()
    const [shape, setShape] = useState<ShapesWithoutId>()
    const { togglePopup, popupView } = useView()

    const showForm = (position: Position) => {
        const newShape = DEFAULT_SHAPE
        newShape.position = position
        setShape(newShape)
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

    const createNewShape = (position: Position) => {
        const newShape = DEFAULT_SHAPE
        newShape.position = position
        addShape(newShape)
    }

    const showPopup = popupView == POPUP_NEW_SHAPE_FORM

    return (
        <div className={clsx([Styles.formContainer, showPopup && Styles.active])} onClick={handleOutsideClick}>
            <div className={Styles.content}>
                <CloseButton className={Styles.closeButton} onClick={close} />

                {showPopup ? <NewShapeForm onSubmit={onSubmit} initialData={shape} /> : null}

                {props.newShapeOnDoubleClick ? <MouseListener onDoubleClick={createNewShape} /> : null}
            </div>
        </div>
    )
}