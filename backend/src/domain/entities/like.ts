import { randomUUID } from "crypto";

type data = {
  id?: string;
  postId: string;
  userId: string;
};

export class Like {
  private id: string;
  private postId: string;
  private userId: string;

  constructor(data: data) {
    this.id = data.id ?? randomUUID();
    this.postId = data.postId;
    this.userId = data.userId;
  }

  public getLike() {
    return {
      id: this.id,
      postId: this.postId,
      userId: this.userId,
    };
  }
}
