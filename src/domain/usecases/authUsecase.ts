
export interface IAuthUsecase {
    auth: (email: string, password: string) => void
}