import { randomUUID } from "crypto";

type data = {
  userId: string;
  followingId: string;
  id?: string;
};

export class Room {
  private userId: string;
  private followingId: string;
  private id: string;

  constructor(data: data) {
    this.userId = data.userId;
    this.followingId = data.followingId;
    this.id = data.id ?? randomUUID();
  }

  getRoom() {
    return {
      id: this.id,
      userId: this.userId,
      followingId: this.followingId,
    };
  }
}
