import { randomUUID } from "crypto";
import { IProject } from "../../types/project";
import { IUser } from "../../types/user";

export class Project {
  private name: string;
  private description: string;
  private owner: string;
  private collaborators: string[];
  private id: string;

  constructor(data: IProject) {
    this.name = data.name;
    this.description = data.description;
    this.owner = data.owner;
    this.collaborators = data.collaborators ?? [];
    this.id = randomUUID();
  }
  
  public getProject(){
    return {
        id: this.id,
        name: this.name,
        description: this.description,
        owner: this.owner,
        collaborators: this.collaborators
    }
  }

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }

  public getDescription() {
    return this.description;
  }

  public getOwner() {
    return this.owner;
  }

  public getCollaborator() {
    return this.collaborators;
  }

  public addNewCollaborator(userId: string) {
    this.collaborators = this.collaborators
      ? [...this.collaborators, userId]
      : [userId];
  }

  public setDescription(desc: string) {
    this.description = desc;
  }

  public setName(name: string) {
    this.name = name;
  }
}
