import { IProject } from "../../types/project";

export interface ILoadUserProjects {
  load: (data: { id: string }) => Promise<IProject[] | null>;
}
