import { instance } from "./index";
import { clientInfoType, transactionType } from "./PersonDataTypes";

export const PersonDataAPI = {
  confirmToken: async (token: string): Promise<clientInfoType> => {
    const { data } = await instance.get<clientInfoType>("personal/client-info", {
      headers: {
        'X-Token': token
      }
    });
    return data;
  },
  getClientInfo: async (): Promise<clientInfoType> => {
    const { data } = await instance.get<clientInfoType>("personal/client-info",)
    return data;
  },
  getTransaction: async (account: string, from: string, to?: string): Promise<transactionType[]> => {
    const { data } = await instance.get<transactionType[]>(`personal/statement/${account}/${from}/${to ?? ''}`,)
    return data;
  },

};