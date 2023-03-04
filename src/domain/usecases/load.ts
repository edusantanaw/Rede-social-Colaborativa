export interface ILoadUsecase <P, R> {
    load: (data: P) => Promise<R | null>
}