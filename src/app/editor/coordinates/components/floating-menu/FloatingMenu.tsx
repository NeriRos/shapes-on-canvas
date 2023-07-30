"use client"

import React from "react"
import { POPUP_NEW_SHAPE_FORM, useView } from "@/app/view/context"
import { CoordinatesDisplay } from "@/editor/coordinates/components/coordinates-display/CoordinatesDisplay"
import { Button } from "@/core/components/button"
import styles from "./FloatingMenu.module.css"
import { TEXTS } from "@/editor/coordinates/components/floating-menu/consts"

export const FloatingMenu = () => {
    const { togglePopup } = useView()

    const add = () => {
        togglePopup(POPUP_NEW_SHAPE_FORM)
    }

    return <div className={styles.container}>
        <div className={styles.content}>
            <h3 className={styles.title}>{TEXTS.TITLE}</h3>

            <CoordinatesDisplay />

            <Button onClick={add}>{TEXTS.ADD_SHAPE_BUTTON}</Button>
        </div>
    </div>
}