import { ILoadByIdUsecase } from "../../../domain/usecases/loadById";
import { ILoadByIdRepository } from "../../protocols/repositories/loadProjectById";

export class LoadById<T> implements ILoadByIdUsecase<T> {
  constructor(private readonly repository: ILoadByIdRepository<T>) {}
  public async load(id: string): Promise<T | null> {
    const data = await this.repository.loadById(id);
    return data;
  }
}
