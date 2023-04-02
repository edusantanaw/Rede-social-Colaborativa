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

export async function joinProjectChat(projectId: string) {
  socket.emit("join_room", projectId);
}

type createTask = {
  title: string;
  description: string;
  projectId: string;
  assignedTo?: string;
};

export async function createTask(data: createTask) {
  const response = await Api.post<ITask>("/project/task", data, makeOptions());
  return response.data;
}

export async function inviteCollab(projectId: string, invitedId: string) {
  const response = await Api.post(
    "/project/invite/" + projectId,
    { invitedId },
    makeOptions()
  );
  return response.data;
}

type invite = {
  inviteId: string;
  accepted: boolean;
};

export async function acceptOrDeclineInvite(data: invite) {
  const response = await Api.patch(
    `/project/invite/${data.inviteId}`,
    data,
    makeOptions()
  );
  return response.data;
}
