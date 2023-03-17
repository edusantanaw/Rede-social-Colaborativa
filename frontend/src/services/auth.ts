import { signinData } from "../types/auth";
import { IUser } from "../types/user";
import { Api } from "../utils/api";

type apiResponse = { 
    token: string;
    user: IUser;
};

export async function signinService(data: signinData) {
    const response = await Api.post<apiResponse>("/signin", data);
    return response;
}
