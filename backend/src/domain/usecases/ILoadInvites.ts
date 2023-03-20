
export interface ILoadAll<T> {
  load: (id: string) => Promise<T[] | null>;
}
