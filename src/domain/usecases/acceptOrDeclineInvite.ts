export interface IAcceptOrDeclineInviteUsecase {
  update: (inviteId: string, status: string) => Promise<void>;
}
