import { randomUUID } from "crypto";

type data = {
  title: string;
  description: string;
  done?: boolean;
  projectId: string;
  assignedTo?: string;
  id?: string;
};

export class Task {
  private id: string;
  private title: string;
  private description: string;
  private done: boolean;
  private assignedTo: string | undefined;
  private projectId: string;

  constructor({ description, projectId, title, assignedTo, done, id }: data) {
    this.title = title;
    this.description = description;
    this.projectId = projectId;
    this.assignedTo = assignedTo;
    this.done = done ?? false;
    this.id = id ?? randomUUID();
  }

  public getTask() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      done: this.done,
      assignedTo: this.assignedTo,
      projectId: this.projectId,
    };
  }

  public get getTitle() {
    return this.title;
  }

  public get getId() {
    return this.id;
  }

  public get getDescription() {
    return this.description;
  }

  public get getDone() {
    return this.done;
  }

  public get getProjectId() {
    return this.projectId;
  }

  public get getAssignedTo() {
    return this.assignedTo;
  }

  public setTitle(title: string) {
    this.title = title;
  }

  public setDescription(desc: string) {
    this.description = desc;
  }

  public setDone(done: boolean) {
    this.done = done;
  }

  public setAssignedTo(userId: string) {
    if (this.assignedTo)
      throw new Error("task has already been assigned to another user!");
    this.assignedTo = userId;
  }
}
