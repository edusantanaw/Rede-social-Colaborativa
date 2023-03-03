import { ILoadCollabs } from "../../domain/usecases/loadCollabs";
import { collabs } from "../../types/collabs";
import { IProject } from "../../types/project";
import { ILoadByIdRepository } from "../protocols/repositories/loadProjectById";

interface ILoadCollabsRepository {
  load: (projectId: string) => Promise<collabs[]>;
}

export class LoadCollabs implements ILoadCollabs {
  constructor(
    private readonly collabsRepository: ILoadCollabsRepository,
    private readonly projectRepository: ILoadByIdRepository<IProject>
  ) {}
  public async load(projectId: string): Promise<collabs[] | null> {
    const projectExists = !!(await this.projectRepository.loadById(projectId));
    if(!projectExists) throw new Error("Project not exists!")
    const collabs = await this.collabsRepository.load(projectId);
    if (collabs.length === 0) return null;
    return collabs;
  }
}
