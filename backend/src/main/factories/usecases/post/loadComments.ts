import { LoadAllUsecase } from "../../../../data/usecases/generics/loadAll";
import { CommentRepository } from "../../../../infra/repositories/commentRepository";

export function makeLoadCommentsUsecase() {
  return new LoadAllUsecase(new CommentRepository());
}
