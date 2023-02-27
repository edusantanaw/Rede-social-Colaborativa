import { IUser } from "../../types/user";

type data = {
    name: string
    description: string
    category: string
    owner: IUser
    collaborators: IUser[]
}

export class Project {
  private name!: string;
  private description!: string;
  private owner!: IUser;
  private collaborators!: IUser[];

  constructor(data: data){
    this.name = data.name
    this.description = data.description
    this.owner = data.owner
    this.collaborators = data.collaborators
  }

  public getName(){
    return this.name
  }

  public getDescription(){
    return this.description
  }
  
  public getOwner(){
    return this.owner
  }

  public getCollaborator(){
    return this.collaborators
  }

  public addNewCollaborator(user: IUser){
    this.collaborators = [...this.collaborators, user];
  }

  public setDescription(desc: string){
    this.description = desc
  }
  
  public setName(name: string){
    this.name = name;
  }
}

