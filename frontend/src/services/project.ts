import { Api } from "../utils/api";
import { makeOptions } from "../utils/makeOptions";

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
