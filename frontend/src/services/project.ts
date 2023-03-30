import { ITask } from "../shared/types/project";
import { Api } from "../shared/utils/api";
import { makeOptions } from "../shared/utils/makeOptions";
import socket from "../shared/utils/socket";

type project = {
  ownerId: string;
  name: string;
  description: string;
};

export async function createProject(data: project) {
  const response = await Api.post(`/project`, data, makeOptions());
  return response.data;
}


export async function joinProjectChat(projectId: string){
    socket.emit('join_room', projectId)
}

type createTask = {
  title: string;
  description: string;
}

export async function createTask(data: createTask){
  const response = await Api.post<ITask>("/project/task", data, makeOptions())
  return response.data;
}