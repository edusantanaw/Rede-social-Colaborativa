import { SendMessage } from "../../../data/usecases/sendMessage";
import { MessageRepository } from "../../../infra/repositories/massage";
import { ProjectRepository } from "../../../infra/repositories/projectRepository";

export function makeSendMessageUsecase() {
  const messageRepository = new MessageRepository();
  const projectRepository = new ProjectRepository();
  return new SendMessage(messageRepository, projectRepository);
}
