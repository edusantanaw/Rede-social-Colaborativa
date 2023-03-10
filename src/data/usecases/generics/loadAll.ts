import { ILoadAll } from "../../../domain/usecases/ILoadInvites";
import { ILoadAllRepository } from "../../protocols/repositories/loadAll";

export class LoadAllUsecase<T> implements ILoadAll<T> {
  constructor(private readonly repository: ILoadAllRepository<T>) {}

  public async loadAll(id: string): Promise<T[] | null> {
    const data = await this.repository.loadAll(id);
    return data;
  }
}
