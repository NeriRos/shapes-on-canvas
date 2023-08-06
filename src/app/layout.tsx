import React from "react"
import "@/styles/global.css"
import { FloatingCredits } from "@/core/components/floating-credits/FloatingCredits"

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        {children}
        <FloatingCredits />
        </body>
        </html>
    )
}