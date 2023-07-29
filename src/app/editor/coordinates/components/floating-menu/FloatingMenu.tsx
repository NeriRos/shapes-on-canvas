"use client"

import React from "react"
import styles from "./FloatingMenu.module.css"
import { POPUPS, useView } from "@/app/view/context"

export const FloatingMenu = () => {
    const { displayPopup, popupView } = useView()

    const add = () => {
        displayPopup(popupView === POPUPS.NEW_SHAPE_FORM ? null : POPUPS.NEW_SHAPE_FORM)
    }

    return <div className={styles.container}>
        <button onClick={add}>
            Add Shape
        </button>
    </div>
}