export type Popups = null | "NEW_SHAPE_FORM"

export type Screens = "MARKETING" | "EDITOR"

export type ViewProviderData = {
    screen: Screens,
    popupView: Popups,
    togglePopup: (popup: Popups, state?: boolean) => void
}