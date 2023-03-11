export interface ILoadByIdRepository<T>{
    loadById: (id: string) => Promise< T | null>;
  }