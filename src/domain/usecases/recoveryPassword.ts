export type recoveryPassword = {
  email: string;
  password: string;
};

export interface IRecoveryPassword {
  execute: (data: recoveryPassword) => Promise<string>;
}
