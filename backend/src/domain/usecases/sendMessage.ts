export type message = {
  id?: string;
  senderId: string;
  message?: string;
  file?: string;
  room: string;
};

export interface ISendMessage {
  send: (message: message) => Promise<message>;
}
