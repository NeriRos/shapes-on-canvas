"use client"

import React from "react"
import styles from "./FloatingMenu.module.css"
import { POPUP_NEW_SHAPE_FORM, useView } from "@/app/view/context"
import { CoordinatesDisplay } from "@/editor/coordinates/components/coordinates-display/CoordinatesDisplay"

export const FloatingMenu = () => {
    const { togglePopup } = useView()

    const add = () => {
        togglePopup(POPUP_NEW_SHAPE_FORM)
    }

    return <div className={styles.container}>
        <CoordinatesDisplay />

        <button onClick={add}>
            Add Shape
        </button>
    </div>
}