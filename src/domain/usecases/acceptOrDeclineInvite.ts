export interface IAcceptOrDeclineInviteUsecase {
  update: (inviteId: string, accepted: boolean) => Promise<void>;
}
