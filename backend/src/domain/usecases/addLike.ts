type data = {
  postId: string;
  userId: string;
};

export interface IAddOrRemovePostLike {
  execute: (data: data) => Promise<void>;
}
