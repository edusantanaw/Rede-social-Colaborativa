export type message = {
  id?: string;
  senderId: string;
  message?: string;
  file?: string;
  projectId: string;
};

export interface ISendMessage {
  send: (message: message) => Promise<message>;
}
