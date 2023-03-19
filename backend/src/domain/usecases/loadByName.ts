
export interface ILoadByNameUsecase <T>{
  load: ({ name }: { name: string }) => Promise<T[] | null>;
}
