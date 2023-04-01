import { randomUUID } from "crypto";
type data = {
  name: string;
  password: string;
  email: string;
  file?: string;
  id?: string;
  bio?:string;
};

export class User {
  private name: string;
  private email: string;
  private password: string;
  private id: string;
  private perfilPhoto?: string;
  bio?: string;
  private roles: string[] = [];

  constructor({ email, name, password, file, id, bio }: data) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.id = id ?? randomUUID();
    this.roles = ["USER"];
    this.perfilPhoto = file;
    this.bio = bio;
  }

  public getUser() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      roles: this.roles,
      perfilPhoto: this.perfilPhoto,
      bio: this.bio
    };
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }

  public getId() {
    return this.id;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setPassword(password: string) {
    this.password = password;
  }

  public setEmail(email: string) {
    this.email = email;
  }

  public getRoles() {
    return this.roles;
  }

  public addNewRole(role: string) {
    this.roles = [...this.roles, role];
  }
}
