
export interface IForgetPassword {
    execute: (email: string) => Promise<string>   
}