import { randomUUID } from "crypto";

type data = {
  id?: string;
  postId?: string;
  content: string;
  userId: string;
};

export class Comment {
  private id: string;
  private postId?: string;
  private content: string;
  private userId: string;

  constructor(data: data) {
    this.id = data.id ?? randomUUID();
    this.content = data.content;
    this.postId = data.postId;
    this.userId = data.userId;
  }

  getComment() {
    return {
      id: this.id,
      postId: this.postId,
      userId: this.userId,
      content: this.content,
    };
  }
}
