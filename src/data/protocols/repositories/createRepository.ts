export interface ICreateRepository<T, D> {
  create: (data: D) => Promise<T>;
}
