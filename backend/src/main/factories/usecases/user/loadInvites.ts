import { LoadAllUsecase } from "../../../../data/usecases/generics/loadAll";
import { InviteRepository } from "../../../../infra/repositories/inviteRepository";


export function makeLoadAllInvitesUsecase(){
    const inviteRepository = new InviteRepository()
    return new LoadAllUsecase(inviteRepository)
}