import { Task } from "../../domain/entities/task";import { ITask, taskLoad } from "../../types/task";
import { task } from "../prisma";

export class TaskRepository {
  public async create(data: ITask) {
    const newTask = await task.create({
      data: {
        id: data.id,
        title: data.title,
        description: data.description,
        projectId: data.projectId,
        assignedTo: data.assignedTo,
      },
    });
    return newTask as ITask;
  }

  public async load(data: taskLoad) {
    console.log(data);
    const tasks = await task.findMany({
      where: {
        AND: [
          { projectId: data.projectId },
          { done: data.done },
          { assignedTo: data.assignedTo },
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

  public async loadById(id: string) {
    const maybeTask = await task.findFirst({ where: { id: id } });
    return maybeTask as ITask;
  }

  public async acceptTask(itask: Task) {
    await task.update({
      where: {
        id: itask.getId(),
      },
      data: {
        assignedTo: itask.getAssignedTo(),
      },
    });
  }

  public async finish(dtask: ITask) {
    const updatedTask = await task.update({
      where: {
        id: dtask.id,
      },
      data: dtask,
    });
    return updatedTask as ITask;
  }
}
