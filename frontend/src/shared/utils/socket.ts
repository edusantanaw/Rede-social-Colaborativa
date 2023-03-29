import io from "socket.io-client";
import { baseUrl } from "../../constants/baseUrl";

const socket = io(baseUrl);
socket.connect();

export default socket;