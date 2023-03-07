export type IMessage = {
    id: string;
    senderId: string;
    projectId: string;
    message?: string;
    file?: string;
}