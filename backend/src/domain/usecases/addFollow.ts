export interface IAddFollow {
  add: (userId: string, followingId: string) => Promise<void>;
}
