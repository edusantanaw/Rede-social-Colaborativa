export interface IAcceptTaskUsecase {
    execute: (userId: string, taskId: string) => Promise<void>
}