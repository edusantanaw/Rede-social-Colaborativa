import { ILoadCollabs } from "../../domain/usecases/loadCollabs";
import { ILoadProjectByIdRepository } from "../protocols/repositories/loadProjectById";

interface ILoadCollabsRepository {
  load: (projectId: string) => Promise<string[]>;
}

export class LoadCollabs implements ILoadCollabs {
  constructor(
    private readonly collabsRepository: ILoadCollabsRepository,
    private readonly projectRepository: ILoadProjectByIdRepository
  ) {}
  public async load(projectId: string): Promise<string[] | null> {
    const projectExists = !!(await this.projectRepository.loadById(projectId));
    if(projectExists) throw new Error("Project not exists!")
    const collabs = await this.collabsRepository.load(projectId);
    if (collabs.length === 0) return null;
    return collabs;
  }
}
