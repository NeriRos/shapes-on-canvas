export type Shape = {
    id: string
    title: string
    type: string
    attributes: {
        width: number
        height: number
    }
    color?: string
    position: {
        x: number
        y: number
    }
};
