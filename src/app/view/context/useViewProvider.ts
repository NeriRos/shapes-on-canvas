"use client"

import { useState } from "react"
import { POPUPS, SCREENS } from "@/app/view/context"

export type ViewProviderData = {
    screen: keyof typeof SCREENS,
    popupView: keyof typeof POPUPS,
    displayPopup: (popup: keyof typeof POPUPS) => void
}

export const useViewProvider = (props: { screen: ViewProviderData["screen"] }): ViewProviderData => {
    const [popupView, setPopupView] = useState<ViewProviderData["popupView"]>(POPUPS.NONE)
    const [screen, setScreen] = useState<ViewProviderData["screen"]>(props.screen)

    const displayPopup = (popup: ViewProviderData["popupView"]) => {
        setPopupView(popup)
    }

    return {
        popupView,
        displayPopup,
        screen,
    }
}