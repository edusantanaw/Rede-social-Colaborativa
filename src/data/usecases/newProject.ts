import { Project } from "../../domain/entities/project";
import { INewProjectUsecase } from "../../domain/usecases/newProject";
import { IProject } from "../../types/project";

interface ICreateProjectRepository {
    save: (data: Project) => Promise<IProject>;
}

export class NewProjectUsecase implements INewProjectUsecase {

    constructor(
        private readonly projectRepository: ICreateProjectRepository,
    ){}

    public async create(data: IProject): Promise<IProject>{
        const project = new Project(data)
        const newProject = await this.projectRepository.save(project);
        return newProject;
    };
}