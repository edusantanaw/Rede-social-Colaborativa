import { randomUUID } from "crypto";
import { message } from "../usecases/sendMessage";

export class Message {
  private id: string;
  private message?: string;
  private file?: string;
  private senderId: string;
  private room: string;

  constructor(data: message) {
    if (!data.message && !data.file)
      throw new Error("file or data is required!");
    this.id = data.id ?? randomUUID();
    this.message = data.message;
    this.file = data.file;
    this.senderId = data.senderId;
    this.room = data.room;
  }

  public getMessageContent() {
    return {
      id: this.id,
      message: this.message,
      file: this.file,
      senderId: this.senderId,
      room: this.room,
    };
  }

  public getId() {
    return this.id;
  }

  public getMessageC() {
    this.message;
  }

  public getFile() {
    return this.file;
  }

  public getSender() {
    return this.senderId;
  }

  public getRoom() {
    return this.room;
  }
  public setMessage(msg: string) {
    this.message = msg;
  }

  public setFile(file: string) {
    this.file = file;
  }

  public setSender(id: string) {
    return (this.senderId = id);
  }
}
