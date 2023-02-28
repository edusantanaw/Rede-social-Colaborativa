import { invites } from "../../types/invites";

export interface ILoadInvites {
  loadAll: (userId: string) => Promise<invites[] | null>;
}
