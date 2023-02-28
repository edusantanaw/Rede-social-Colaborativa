import { randomUUID } from "crypto";

export class User {
  private name: string;
  private email: string;
  private password: string;
  private id: string;
  private roles: string[] = [];

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.id = randomUUID();
    this.roles = ["USER"];
  }

  public getUser() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      roles: this.roles,
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
