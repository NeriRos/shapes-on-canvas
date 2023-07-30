export type Position = {
    x: number,
    y: number
}

export type Shape = {
    id: string
    title: string
    type: string
    isDragging?: boolean
    attributes: {
        width: number
        height: number
    }
    color?: string
    position: Position
};
