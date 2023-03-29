import { signinData } from "../shared/types/auth";
import { IUser } from "../shared/types/user";
import { Api } from "../shared/utils/api";

type apiResponse = { 
    token: string;
    user: IUser;
};

export async function signinService(data: signinData) {
    const response = await Api.post<apiResponse>("/signin", data);
    return response;
}
