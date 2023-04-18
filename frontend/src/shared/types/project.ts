export type IProject = {
  id: string;
  name: string;
  perfilImage?: string;
};

export type ITask = {
  id: string;
  assignTo?: string;
  title: string;
  description: string;
};


export type Project = {
  perfilPhoto: string;
  perfilImage: string;
  qtdCollabs: number;
  projectId: string;
  name: string;
  ownerName: string;
  createdAt: string;
  description: string;
  userId: string;
};
