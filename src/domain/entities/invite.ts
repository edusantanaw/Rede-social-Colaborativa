import { randomUUID } from "node:crypto";


export class Invite {
    private id: string;
    private invitedId: string;
    private projectId: string;
    private status: string;
    constructor(invitedId: string, projectId: string, id?:string, status?:string){
        this.invitedId = invitedId;
        this.projectId = projectId;
        this.id = id ?? randomUUID();
        this.status = status ?? "pending"
    }
    public getInvite(){
        return {
            id: this.id,
            invitedId: this.invitedId,
            projectId: this.projectId,
            status: this.status
        };
    }
    public getId(){
        return this.id;
    }

    public getInvitedId(){
        return this.invitedId;
    }

    public getProjectId(){
        return this.projectId;
    }

    public getStatus(){
        return this.status;
    }

    public setInvitedId(invitedId: string){
        this.invitedId = invitedId
    }

    public setProjectId(projectId: string){
        this.projectId =  projectId;
    }

    public setStatus(status: string){
        this.status = status;
    }
}