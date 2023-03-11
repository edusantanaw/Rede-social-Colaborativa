import { AxiosError } from "axios";
import { signinData } from "../types/auth";
import { Api } from "../utils/api";

type IUser = {
  id: string;
  email: string;
  name: string;
};

type apiResponse = { 
    token: string;
    user: IUser;
};

export async function signinService(data: signinData) {
    const response = await Api.post<apiResponse>("/signin", data);
    return response;
}
