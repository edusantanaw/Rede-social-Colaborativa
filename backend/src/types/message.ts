export type IMessage = {
    id: string;
    senderId: string;
    room: string;
    message?: string;
    file?: string;
}