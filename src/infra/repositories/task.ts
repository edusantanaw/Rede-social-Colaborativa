import { ITask } from "../../types/task";
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
    return newTask;
  }
}
