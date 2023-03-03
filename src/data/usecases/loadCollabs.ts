import { ILoadCollabs } from "../../domain/usecases/loadCollabs";
import { collabs } from "../../types/collabs";
import { IProject } from "../../types/project";
import { ILoadAllRepository } from "../protocols/repositories/loadAll";
import { ILoadByIdRepository } from "../protocols/repositories/loadProjectById";


export class LoadCollabs implements ILoadCollabs {
  constructor(
    private readonly collabsRepository: ILoadAllRepository<collabs>,
    private readonly projectRepository: ILoadByIdRepository<IProject>
  ) {}
  public async load(projectId: string): Promise<collabs[] | null> {
    const projectExists = !!(await this.projectRepository.loadById(projectId));
    if(!projectExists) throw new Error("Project not exists!")
    const collabs = await this.collabsRepository.loadAll(projectId);
    return collabs;
  }
}
