import { IPost } from "../../../types/post";

export type dataRepository = {
    skip: number;
    take: number;
    userId: string;
  };
  

export interface ILoadFeedRepository {
  loadFeed: (data: dataRepository) => Promise<IPost[]>;
}
