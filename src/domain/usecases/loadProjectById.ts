import { IProject } from "../../types/project";

export interface ILoadProjectByIdUsecase {
  load: (id: string) => Promise<IProject | null>;
}
