

export interface ILoadByNameRepository<T> {
    loadByName: (name: string) => Promise<T[]>;
  }