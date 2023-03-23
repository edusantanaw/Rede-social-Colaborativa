import { IProject } from "../../../types/project";

export interface ILoadUserProjectsRepository {
    loadUserProjects: (id: string) => Promise<IProject[]>;
  }