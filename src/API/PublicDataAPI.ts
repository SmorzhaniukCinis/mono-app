import { instance } from "./index";
import { currencyType } from "./PublicDataTypes";

export const PublicDataAPI = {
  getCurrency: async ():Promise<currencyType[]> => {
    const { data } = await instance.get<currencyType[]>('bank/currency')
    return data
  }
}