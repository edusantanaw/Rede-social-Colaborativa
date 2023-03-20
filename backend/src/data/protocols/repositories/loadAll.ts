export interface ILoadAllRepository<T> {
  loadAll: (userId: string) => Promise<T[]>;
}
