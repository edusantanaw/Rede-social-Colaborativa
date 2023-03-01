export interface IAcceptOrDeclineInviteUsecase {
  accept: (inviteId: string) => Promise<void>;
  decline: (inviteId: string) => Promise<void>;
}
