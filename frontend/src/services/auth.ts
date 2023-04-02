import { IUser } from "../shared/types/user";
import { Api } from "../shared/utils/api";

type apiResponse = { 
    token: string;
    user: IUser;
};

export async function authService<T>(data: T, url: string) {
    const response = await Api.post<apiResponse>(url, data);
    return response.data;
}
