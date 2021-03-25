import { AccountModel } from '../models/account-model'

type AutheticationParams = {
  name: string
  password: string
}
export interface Authentication {
  auth(params: AutheticationParams): Promise<AccountModel>
}
