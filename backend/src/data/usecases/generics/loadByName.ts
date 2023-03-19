import { ILoadByNameUsecase } from "../../../domain/usecases/loadByName";
import { ILoadByNameRepository } from "../../protocols/repositories/loadByName";

export class LoadByNameUsecase<T> implements ILoadByNameUsecase <T>{
  constructor(private readonly repository: ILoadByNameRepository<T>) {}

  public async load({ name }: { name: string }) {
    const data = await this.repository.loadByName(name);
    if (data.length === 0) return null;
    return data;
  }
}
