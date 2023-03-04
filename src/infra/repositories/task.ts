import { ITask, taskLoad } from "../../types/task";
import { task } from "../prisma";

export class TaskRepository {
  public async create(data: ITask) {
    const newTask = await task.create({
      data: {
        id: data.id,
        title: data.title,
        description: data.description,
        projectId: data.projectId,
      },
    });
    return newTask as ITask;
  }

  public async load(data: taskLoad) {
    const tasks = await task.findMany({
      where: {
        AND: [
          { projectId: data.projectId },
          { done: data.done },
          {
            createdAt: {
              gt: data.afterDate,
            },
          },
          { createdAt: { lt: data.beforeDate } },
        ],
      },
    });
    return tasks as ITask[];
  }
}
