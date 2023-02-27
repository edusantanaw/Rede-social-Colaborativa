export interface IEncrypter {
    genHash: (password: string) => Promise<string>;
}