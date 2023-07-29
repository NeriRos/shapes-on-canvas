import { createContext, ReactNode, RefObject, useContext } from "react"

export type CanvasContextType = {
    ref: RefObject<HTMLCanvasElement>,
    items: ReactNode[],
    addItem: (item: ReactNode) => void
}

export const CanvasContext = createContext<CanvasContextType>(null as any)

export const useCanvas = () => {
    return useContext(CanvasContext)
}