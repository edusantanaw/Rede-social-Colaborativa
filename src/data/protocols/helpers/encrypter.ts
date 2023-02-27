export interface IGenHash {
    genHash: (password: string) => Promise<string>;
}

export interface ICompareHash {
    compare: (password: string, hashedPassword: string) => Promise<boolean>
}
