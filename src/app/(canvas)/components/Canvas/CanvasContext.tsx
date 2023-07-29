"use client"

import { createContext, ReactNode, RefObject, useContext } from "react"

export type CanvasContextType = {
    ref: RefObject<HTMLCanvasElement>,
    items: ReactNode[],
    addShape: (shape: ReactNode) => void
}

export const CanvasContext = createContext<CanvasContextType>(null as any)

export const useCanvas = () => {
    return useContext(CanvasContext)
}