"use client"

import { createContext, useContext } from "react"
import { ViewProviderData } from "./useViewProvider"

export const ViewContext = createContext<ViewProviderData>(null as any)

export const useView = () => {
    return useContext(ViewContext)
}