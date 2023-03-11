
export interface ILoadAll<T> {
  loadAll: (userId: string) => Promise<T[] | null>;
}
