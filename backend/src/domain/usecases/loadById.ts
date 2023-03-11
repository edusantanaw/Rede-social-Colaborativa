export interface ILoadByIdUsecase<T> {
  load: (id: string) => Promise< T | null>;
}
