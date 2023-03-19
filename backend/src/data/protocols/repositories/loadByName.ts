import { IProject } from "../../../types/project";

export interface ILoadByNameRepository<T> {
    loadByName: (name: string) => Promise<T[]>;
  }