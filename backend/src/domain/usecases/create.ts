export interface ICreateUsecase<T, R> {
    execute: (data: T) => Promise<R>;
  }
  