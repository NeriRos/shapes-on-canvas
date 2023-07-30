"use client"

import React from "react"
import { POPUP_NEW_SHAPE_FORM, useView } from "@/app/view/context"
import { CoordinatesDisplay } from "@/editor/coordinates/components/coordinates-display/CoordinatesDisplay"
import { Button } from "@/core/components/button"
import styles from "./FloatingMenu.module.css"

export const FloatingMenu = () => {
    const { togglePopup } = useView()

    const add = () => {
        togglePopup(POPUP_NEW_SHAPE_FORM)
    }

    return <div className={styles.container}>
        <h3 className={styles.title}>Details</h3>

        <CoordinatesDisplay />

        <Button onClick={add}>+ Add a Shape</Button>
    </div>
}