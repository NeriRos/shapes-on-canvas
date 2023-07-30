"use client"

import { createContext, useContext } from "react"
import { ViewProviderData } from "@/app/view/context/types"

export const ViewContext = createContext<ViewProviderData>(null as any)

export const useView = () => {
    return useContext(ViewContext)
}