"use client"

import { ViewContext } from "@/app/view/context/ViewContext"
import { ReactNode } from "react"
import { useViewProvider, ViewProviderData } from "@/app/view/context/useViewProvider"

export const ViewProvider = (props: { screen: ViewProviderData["screen"], children: ReactNode }) => {
    const providerData = useViewProvider(props.screen)

    return (
        <ViewContext.Provider value={providerData}>
            {props.children}
        </ViewContext.Provider>
    )
}