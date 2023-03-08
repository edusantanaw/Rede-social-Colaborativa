import { ILoadByNameUsecase } from "../../domain/usecases/loadByName";
import { ILoadByNameRepository } from "../protocols/repositories/loadByName";

export class LoadByProjctNameUsecase implements ILoadByNameUsecase {
  constructor(private readonly projectRepository: ILoadByNameRepository) {}

  public async load({ name }: { name: string }) {
    const projects = await this.projectRepository.loadbyName(name);
    if (projects.length === 0) return null;
    return projects;
  }
}
