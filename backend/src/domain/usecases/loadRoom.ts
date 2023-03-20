
export interface ILoadRoomUsecase {
    load: (data: {userId: string, followingId: string}) => Promise<string>
}