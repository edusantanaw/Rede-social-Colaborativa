import { IPost } from "../../../types/post";

export interface ILoadPostByUserRepository {
  loadPostByUserId: (data: loadPostByUserId) => Promise<IPost[]>;
}

export type loadPostByUserId = {
  skip: number;
  take: number;
  id: string;
};
