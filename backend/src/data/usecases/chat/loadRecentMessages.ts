import { ILoadUsecase } from "../../../domain/usecases/load";
import { IRecentMessages } from "../../../types/message";

interface ILoadRecentMessagesRepository {
  loadReceivedMessages: (id: string) => Promise<IRecentMessages[]>;
}

export class LoadRecentMessages
  implements ILoadUsecase<string, IRecentMessages[]>
{
  constructor(
    private readonly messagesRepository: ILoadRecentMessagesRepository
  ) {}

  public async load(id: string): Promise<IRecentMessages[] | null> {
    const messages = await this.messagesRepository.loadReceivedMessages(id);
    console.log(id, messages)
    if (messages.length === 0) return null;
    return messages;
  }
}
