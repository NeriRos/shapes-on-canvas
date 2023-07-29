"use client";

import React from "react"
import styles from "./FloatingMenu.module.css"
import { useCanvas } from "@/app/(canvas)/components/Canvas/CanvasContext"
import { Square } from "@/app/(canvas)/components/Shapes/Square"

export type FloatingMenuProps = {}

export const FloatingMenu = (props: FloatingMenuProps) => {
    const { addShape } = useCanvas()

    const add = () => {
        addShape(<Square x={10} y={100} size={20} color={"blue"} />)
    }

    return <div className={styles.container}>
        <button onClick={add}>
            asdasda
        </button>
    </div>
}