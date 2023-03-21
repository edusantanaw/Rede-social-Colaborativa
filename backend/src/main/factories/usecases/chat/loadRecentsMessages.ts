import { LoadRecentMessages } from "../../../../data/usecases/chat/loadRecentMessages";
import { MessageRepository } from "../../../../infra/repositories/massage";

export function makeLoadRecentMessagesUsecase(){
    const messagesRepository = new MessageRepository()
    return new LoadRecentMessages(messagesRepository);
}