import { IProject } from "../../types/project";

export interface ILoadByNameUsecase {
  load: ({ name }: { name: string }) => Promise<IProject[] | null>;
}
