"use client"

import { useState } from "react"
import { Popups, Screens, ViewProviderData } from "@/app/view/context"

export const useViewProvider = (props: { screen: Screens }): ViewProviderData => {
    const [popupView, setPopupView] = useState<Popups>(null)
    const [screen, setScreen] = useState<Screens>(props.screen)

    const togglePopup = (popup: Popups, state?: boolean) => {
        setPopupView((current) => {
            if (state !== undefined) {
                return state ? popup : null
            }

            return current === popup ? null : popup
        })
    }

    return {
        popupView,
        togglePopup,
        screen,
    }
}