export type inviteData = {
    projectId: string;
    invitedId: string;
}

export interface IInviteCollaboratorUsecase {
    invite: (data: inviteData) => Promise<void>;
}