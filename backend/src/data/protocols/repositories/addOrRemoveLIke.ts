import { ILike } from "../../../types/like";

export interface IAddOrRemoveRepository {
    loadLike: (postId: string, userId: string) => Promise<ILike | null>;
    removeLike: (id: string) => Promise<void>;
    addLike: (data: ILike) => Promise<void>;
  }