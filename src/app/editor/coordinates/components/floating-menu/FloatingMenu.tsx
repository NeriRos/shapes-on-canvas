"use client"

import { POPUP_NEW_SHAPE_FORM, useView } from "@/app/view/context"
import { Button } from "@/core/components/button"
import styles from "./FloatingMenu.module.css"

export const FloatingMenu = () => {
    const { togglePopup } = useView()

    const add = () => {
        togglePopup(POPUP_NEW_SHAPE_FORM)
    }

    return (
        <div className={styles.container}>
            <Button onClick={add}>+ Add a Shape</Button>
        </div>
    )
}
