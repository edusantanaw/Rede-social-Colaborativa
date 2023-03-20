import { ILoadUsecase } from "../../../domain/usecases/load";
import { IPost } from "../../../types/post";

interface ILoadLikesRepository {
  loadById: (id: string) => Promise<IPost | null>;
  loadLikes: (id: string) => Promise<string[]>;
}

export class LoadLikeUsecase implements ILoadUsecase<string, string[]> {
  constructor(private readonly postRepository: ILoadLikesRepository) {}

  public async load(data: string): Promise<string[] | null> {
    const post = await this.postRepository.loadById(data);
    if (!post) throw new Error("Post not exists!");
    const likes = await this.postRepository.loadLikes(data);
    if (likes.length === 0) return null;
    return likes;
  }
}
