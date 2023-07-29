"use client"

import React from "react"
import styles from "./FloatingMenu.module.css"
import { SQUARE_SHAPE_TYPE } from "@/editor/canvas/modules/shapes/square"
import { useCanvas } from "@/editor/canvas/context"

export type FloatingMenuProps = {}

export const FloatingMenu = (props: FloatingMenuProps) => {
    const { addShape } = useCanvas()

    const add = () => {
        addShape({
            type: SQUARE_SHAPE_TYPE,
            position: { x: 20, y: 20 },
            color: "blue",
            attributes: { size: 20 },
            id: 2,
        })
    }

    return <div className={styles.container}>
        <button onClick={add}>
            Add Shape
        </button>
    </div>
}