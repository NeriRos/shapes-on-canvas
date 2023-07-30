import clsx from "clsx"
import Styles from "./Button.module.css"

export type ButtonProps = {
    children: React.ReactNode
    onClick?: () => void
    className?: string
    disabled?: boolean
    type?: "button" | "submit" | "reset"
}

export const Button = ({
    children,
    onClick,
    className,
    disabled,
    type = "button",
}: ButtonProps) => {
    return (
        <button
            className={clsx([className, Styles.button])}
            onClick={onClick}
            disabled={disabled}
            type={type}>
            {children}
        </button>
    )
}
