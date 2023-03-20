import { Like } from "../../../domain/entities/like";
import { IAddOrRemovePostLike } from "../../../domain/usecases/addLike";
import { IAddOrRemoveRepository } from "../../protocols/repositories/addOrRemoveLIke";

type data = {
  postId: string;
  userId: string;
};

export class AddOrRemovePostLikeUsecase implements IAddOrRemovePostLike {
  constructor(private readonly postRepository: IAddOrRemoveRepository) {}

  public async execute(data: data): Promise<void> {
    const maybeLike = await this.postRepository.loadLike(
      data.postId,
      data.userId
    );
    if (maybeLike) {
      await this.remove(maybeLike.id);
      return;
    }
    await this.add(data.userId, data.postId);
  }

  private async remove(id: string) {
    this.postRepository.removeLike(id);
  }

  private async add(userId: string, postId: string) {
    const newLike = new Like({ postId, userId });
    await this.postRepository.addLike(newLike.getLike());
  }
}
