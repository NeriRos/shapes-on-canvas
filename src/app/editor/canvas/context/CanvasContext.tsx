"use client"

import { createContext, useContext } from "react"
import { CanvasProviderData } from "./useCanvasProvider"

export const CanvasContext = createContext<CanvasProviderData>(null as any)

export const useCanvas = () => {
    return useContext(CanvasContext)
}