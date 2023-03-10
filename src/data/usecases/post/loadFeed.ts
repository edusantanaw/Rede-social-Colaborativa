import { IPost } from "../../../types/post";

type data = {
  skip?: number;
  take?: number;
  userId: string;
};

type dataRepository = {
  skip: number;
  take: number;
  userId: string;
};

interface ILoadFeedRepository {
  loadFeed: (data: dataRepository) => Promise<IPost[]>;
}

export class LoadFeedUsecase {
  constructor(private readonly postRepository: ILoadFeedRepository) {}

  public async load(data: data) {
    const mappedData = this.mapData(data);
    const posts = await this.postRepository.loadFeed(mappedData);
    if (posts.length === 0) return null;
    return posts;
  }

  private mapData(data: data) {
    const initialPage = 0;
    const maxLoad = 30;
    return {
      skip: data.skip ? data.skip : initialPage,
      take: data.take ? (data.take > maxLoad ? maxLoad : data.take) : maxLoad,
      userId: data.userId,
    };
  }
}
