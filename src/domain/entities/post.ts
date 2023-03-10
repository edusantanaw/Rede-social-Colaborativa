import { randomUUID } from "crypto";

type data = {
  id?: string;
  content: string;
  image: string;
  userId: string;
};

export class Post {
  private id: string;
  private content: string;
  private image: string;
  private userId: string;

  constructor(data: data) {
    if (!data.content && !data.image)
      throw new Error("Content or image is required!");
    this.id = data.id ?? randomUUID();
    this.content = data.content;
    this.image = data.image;
    this.userId = data.userId;
  }

  public getPost() {
    return {
      id: this.id,
      contente: this.content,
      image: this.image,
      userid: this.userId,
    };
  }
}
