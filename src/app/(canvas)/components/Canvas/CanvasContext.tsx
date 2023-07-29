"use client"

import { createContext, useContext } from "react"
import { CanvasProviderData } from "@/app/(canvas)/components/Canvas/useCanvasProvider"

export const CanvasContext = createContext<CanvasProviderData>(null as any)

export const useCanvas = () => {
    return useContext(CanvasContext)
}