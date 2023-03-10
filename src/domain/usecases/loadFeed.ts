import { IPost } from "../../types/post";

export type dataFeed = {
  skip?: number;
  take?: number;
  userId: string;
};

export interface ILoadFeedUsecase {
  load: (data: dataFeed) => Promise<IPost[] | null>;
}
