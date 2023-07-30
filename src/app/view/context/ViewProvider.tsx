"use client"

import { ViewContext } from "@/app/view/context/ViewContext"
import { ReactNode } from "react"
import { useViewProvider } from "@/app/view/context/useViewProvider"
import { Screens } from "@/app/view/context/types"

export const ViewProvider = (props: { screen: Screens, children: ReactNode }) => {
    const providerData = useViewProvider({ screen: props.screen })

    return (
        <ViewContext.Provider value={providerData}>
            {props.children}
        </ViewContext.Provider>
    )
}