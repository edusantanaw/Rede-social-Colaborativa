import { Api } from "../shared/utils/api";
import { makeOptions } from "../shared/utils/makeOptions";
import socket from "../shared/utils/socket";

type project = {
  ownerId: string;
  name: string;
  description: string;
};

export async function createProject(data: project) {
  console.log(data);
  const response = await Api.post(`/project`, data, makeOptions());
  console.log(response);
  return response.data;
}


export async function joinProjectChat(projectId: string){
    socket.emit('join_room', projectId)
}
