import { invites } from "../../../types/invites";

export interface IAcceptOrDeclineInviteRepository {
    loadById: (id: string) => Promise<invites | null>;
    updateStatus: (inviteId: string, accepted: boolean) => Promise<void>;
  }