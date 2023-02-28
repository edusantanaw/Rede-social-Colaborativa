import { invites } from "../../types/invites";

export interface ILoadAllInvites {
  loadAll: (userId: string) => Promise<invites[] | null>;
}
