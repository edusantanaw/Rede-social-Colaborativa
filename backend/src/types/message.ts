export type IMessage = {
    id: string;
    senderId: string;
    room: string;
    message?: string;
    file?: string;
}

export type IRecentMessages =  {
    userId: string;
    message: string;
    perfilPhoto: string;
}