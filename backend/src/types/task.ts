export type ITask = {
  id: string;
  projectId: string;
  title: string;
  description: string;
  done: boolean;
  assignedTo?: string;
};

export type taskLoad = {
  projectId: string;
  skip?: number;
  take?: number;
  done?: boolean;
  afterDate?: string;
  beforeDate?: string;
  assignedTo?: string;
};
