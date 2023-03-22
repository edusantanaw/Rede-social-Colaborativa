import { baseUrl } from "../constants/baseUrl";
import { Api } from "../utils/api";
import { makeOptions } from "../utils/makeOptions";

type project = {
    onwerId: string;
    name: string;
    description: string;
}

export async function createProject(data: project) {
  const response = await Api.post(`${baseUrl}/project$`, data, makeOptions());
  return response.data;
}
