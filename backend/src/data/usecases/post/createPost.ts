import { Post } from "../../../domain/entities/post";
import { ICreateUsecase } from "../../../domain/usecases/create";
import { IPost } from "../../../types/post";
import { IUser } from "../../../types/user";
import { ICreateRepository } from "../../protocols/repositories/createRepository";
import { ILoadByIdRepository } from "../../protocols/repositories/loadProjectById";

type data = {
  userId: string;
  file?: string;
  content?: string;
};

export class CreatePostUsecase implements ICreateUsecase<data, IPost> {
  constructor(
    private readonly userRepository: ILoadByIdRepository<IUser>,
    private readonly postRepository: ICreateRepository<IPost, IPost>
  ) {}

  public async execute({ userId, content, file: image }: data): Promise<IPost> {
    const userExists = await this.userRepository.loadById(userId);
    if (!userExists) throw new Error("User not exists!");
    const post = new Post({ userId, content, image });
    const newPost = await this.postRepository.create(post.getPost());
    return newPost;
  }
}
