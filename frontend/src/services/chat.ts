import io from "socket.io-client"
import { baseUrl } from "../constants/baseUrl"

const socket = io(baseUrl);


export function joinRoom(userId: string, followerId: string){
    
}