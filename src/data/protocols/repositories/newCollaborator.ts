
export interface INewCollaboratorRepository {
    create: (projectId: string, userId: string) => Promise<void>;
  }