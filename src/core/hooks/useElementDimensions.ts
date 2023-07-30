import { useEffect, useState } from "react"

export const useElementDimensions = (element: HTMLElement) => {
    const [elementDimensions, setElementDimensions] = useState({
        width: element.innerWidth,
        height: element.innerHeight,
    })

    useEffect(() => {
        const handleResize = () => {
            setElementDimensions({
                width: element.innerWidth,
                height: element.innerHeight,
            })
        }

        element.addEventListener("resize", handleResize)

        // Clean up the event listener on unmount
        return () => {
            element.removeEventListener("resize", handleResize)
        }
    }, []) // Empty dependency array to ensure the effect runs only once

    return elementDimensions
}