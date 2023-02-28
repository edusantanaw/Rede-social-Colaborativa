import { LoadAllInvitesUsecase } from "../../../data/usecases/loadInvites";
import { InviteRepository } from "../../../infra/repositories/inviteRepository";
import { UserRepository } from "../../../infra/repositories/userRepository";


export function makeLoadAllInvitesUsecase(){
    const inviteRepository = new InviteRepository()
    const userRepository = new UserRepository()
    return new LoadAllInvitesUsecase(inviteRepository, userRepository)
}