import { dataFeed, ILoadFeedUsecase } from "../../../domain/usecases/loadFeed";import { ILoadFeedRepository } from "../../protocols/repositories/loadFeed";

export class LoadFeedUsecase implements ILoadFeedUsecase {
  constructor(private readonly postRepository: ILoadFeedRepository) {}

  public async load(data: dataFeed) {
    const mappedData = this.mapData(data);
    const posts = await this.postRepository.loadFeed(mappedData);
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
      userId: data.userId,
    };
  }
}
