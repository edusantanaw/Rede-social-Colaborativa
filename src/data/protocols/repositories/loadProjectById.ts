import { IProject } from "../../../types/project";

export interface ILoadProjectByIdRepository {
    loadById: (id: string) => Promise<IProject | null>;
  }