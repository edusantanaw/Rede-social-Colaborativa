import { randomUUID } from "node:crypto";

type inviteData = {
  invitedId: string;
  projectId: string;
  id?: string;
  accepted?: boolean;
};

export class Invite {
  private id: string;
  private invitedId: string;
  private projectId: string;
  private accepted?: boolean;
  
  constructor({invitedId, projectId, id, accepted }: inviteData) {
    this.invitedId = invitedId;
    this.projectId = projectId;
    this.id = id ?? randomUUID();
    this.accepted = accepted;
  }
 
  public getInvite() {
    return {
      id: this.id,
      invitedId: this.invitedId,
      projectId: this.projectId,
      status: this.accepted,
    };
  }
 
  public getId() {
    return this.id;
  }

  public getInvitedId() {
    return this.invitedId;
  }

  public getProjectId() {
    return this.projectId;
  }

  public gettAccepted() {
    return this.accepted;
  }

  public setInvitedId(invitedId: string) {
    this.invitedId = invitedId;
  }

  public setProjectId(projectId: string) {
    this.projectId = projectId;
  }

  public setAccepted(accepted: boolean) {
    this.accepted = accepted;
  }
}
