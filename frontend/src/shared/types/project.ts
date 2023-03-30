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
