import { collabs } from "../../types/collabs";


export interface ILoadCollabs {
    load: (projectId: string) => Promise<collabs[] | null>
}