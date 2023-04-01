export interface IUpdateUsecase<S> {
    execute: (data: S) => Promise<S>;
  }
  