import { IProject } from "../../../types/project";

export interface ILoadByNameRepository {
    loadByName: (name: string) => Promise<IProject[]>;
  }