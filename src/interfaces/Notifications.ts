export interface Notifications {
    id: string,
    userId: string,
    type: string,
    message: string,
    link: string,
    read: boolean,
    createdAt: Date,
    senderId: string
}