import { Message } from "../../domain/entities/message";
import { ISendMessage, message } from "../../domain/usecases/sendMessage";
import { IMessage } from "../../types/message";
import { IProject } from "../../types/project";
import { ICreateRepository } from "../protocols/repositories/createRepository";
import { ILoadByIdRepository } from "../protocols/repositories/loadProjectById";

export class SendMessage implements ISendMessage {
  constructor(
    private readonly messageRepository: ICreateRepository<message, IMessage>,
    private readonly projectRepository: ILoadByIdRepository<IProject>
  ) {}

  public async send(data: message): Promise<message> {
    const projectExists = !!(await this.projectRepository.loadById(
      data.projectId
    ));
    if (!projectExists) throw new Error("Project not exists!");
    const message = new Message(data);
    const newMessage = await this.messageRepository.create(
      message.getMessageContent()
    );
    return newMessage;
  }
}
