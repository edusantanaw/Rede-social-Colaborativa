import { baseUrl } from "../../constants/baseUrl";
import defaultImage from '../assets/default.jpg'

export const formatImage = (perfilPhoto?: string) => perfilPhoto
? `${baseUrl}/${perfilPhoto}` 
: defaultImage;