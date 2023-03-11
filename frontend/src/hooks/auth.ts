import { useContext } from "react";
import { AuthContext } from "../context/Auth";


export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}