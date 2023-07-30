import React from "react"

import Styles from "./CloseButton.module.css"
import clsx from "clsx"

export type CloseButtonProps = {
    onClick: () => void,
    className?: string,
}

export const CloseButton = (props: CloseButtonProps) => {
    return (
        <button className={clsx([Styles.button, props.className])} onClick={props.onClick}>
            <div className={Styles.content}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <g clipPath="url(#clip0_7_167)">
                        <rect width="40" height="40" rx="20" fill="#F7F8F9" />
                    </g>
                    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#F1F2F4" />
                    <defs>
                        <clipPath id="clip0_7_167">
                            <rect width="40" height="40" rx="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M14.7559 5.24408C14.4305 4.91864 13.9028 4.91864 13.5774 5.24408L10 8.82149L6.42259 5.24408C6.09715 4.91864 5.56951 4.91864 5.24408 5.24408C4.91864 5.56951 4.91864 6.09715 5.24408 6.42259L8.82149 10L5.24408 13.5774C4.91864 13.9028 4.91864 14.4305 5.24408 14.7559C5.56951 15.0814 6.09715 15.0814 6.42259 14.7559L10 11.1785L13.5774 14.7559C13.9028 15.0814 14.4305 15.0814 14.7559 14.7559C15.0814 14.4305 15.0814 13.9028 14.7559 13.5774L11.1785 10L14.7559 6.42259C15.0814 6.09715 15.0814 5.56951 14.7559 5.24408Z"
                        fill="#14284B" />
                </svg>
            </div>
        </button>
    )
}