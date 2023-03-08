import { IProject } from "../../../types/project";

export interface ILoadByNameRepository {
    loadbyName: (name: string) => Promise<IProject[]>;
  }