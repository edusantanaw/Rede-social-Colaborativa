

export interface ILoadCollabs {
    load: (projectId: string) => Promise<string[] | null>
}