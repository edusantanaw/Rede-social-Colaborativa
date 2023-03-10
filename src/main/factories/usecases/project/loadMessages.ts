import { LoadAllUsecase } from "../../../../data/usecases/generics/loadAll";
import { MessageRepository } from "../../../../infra/repositories/massage";

export function makeLoadMessages(){
    const messageRepository = new MessageRepository()
    return new LoadAllUsecase(messageRepository);
}