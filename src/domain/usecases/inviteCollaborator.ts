export type inviteData = {
    userId: string;
    projectId: string;
    invitedUser: string;
}

export interface IInviteCollaboratorUsecase {
    invite: (data: inviteData) => Promise<void>;
}