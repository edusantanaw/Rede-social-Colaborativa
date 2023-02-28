import { ILoadProjectByIdUsecase } from "../../domain/usecases/loadProjectById";
import { IProject } from "../../types/project";

interface ILoadProjectByIdRepository {
  loadById: (id: string) => Promise<IProject | null>;
}

export class LoadProjectById implements ILoadProjectByIdUsecase {
  constructor(private readonly repository: ILoadProjectByIdRepository) {}
  public async load(id: string): Promise<IProject | null> {
    const project = await this.repository.loadById(id);
    return project;
  }
}
