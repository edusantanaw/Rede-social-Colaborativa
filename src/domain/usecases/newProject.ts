import { IProject } from "../../types/project";

export interface INewProjectUsecase {
  create: (data: IProject) => Promise<IProject>;
}
