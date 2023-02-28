import { randomUUID } from "node:crypto";
import { IProject } from "../../types/project";

export class Project {
  private name: string;
  private description: string;
  private ownerId: string;
  private collaborators: string[];
  private id: string;

  constructor(data: IProject) {
    this.name = data.name;
    this.description = data.description;
    this.ownerId = data.ownerId;
    this.collaborators = data.collaborators ?? [];
    this.id = randomUUID();
  }
  
  public getProject(){
    return {
        id: this.id,
        name: this.name,
        description: this.description,
        owner: this.ownerId,
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
    return this.ownerId;
  }

  public getCollaborator() {
    return this.collaborators;
  }


  public setDescription(desc: string) {
    this.description = desc;
  }

  public setName(name: string) {
    this.name = name;
  }
}
