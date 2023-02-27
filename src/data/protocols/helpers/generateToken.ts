export interface IGenerateToken {
    generate: (userId: string) => Promise<string>;
}