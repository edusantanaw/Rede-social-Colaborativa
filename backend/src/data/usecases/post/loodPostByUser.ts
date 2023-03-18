import { dataFeed, ILoadFeedUsecase } from "../../../domain/usecases/loadFeed";
import { IPost } from "../../../types/post";

interface ILoadPostByUserRepository {
  loadPostByUserId: (data: loadPostByUserId) => Promise<IPost[]>;
}

type loadPostByUserId = {
  skip: number;
  take: number;
  id: string;
};

export class LoadPostByUserUsecase implements ILoadFeedUsecase {
  constructor(private readonly postRepository: ILoadPostByUserRepository) {}

  public async load(data: dataFeed) {
    const mappedData = this.mapData(data);
    const posts = await this.postRepository.loadPostByUserId(mappedData);
    if (posts.length === 0) return null;
    return posts;
  }

  private mapData(data: dataFeed) {
    const initialPage = 0;
    const maxLoad = 30;
    const skip = Number(data.skip);
    const take = Number(data.take);
    return {
      skip: skip ? skip : initialPage,
      take: take ? (take > maxLoad ? maxLoad : take) : maxLoad,
      id: data.userId,
    };
  }
}
