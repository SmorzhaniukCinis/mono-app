import { instance } from "./index";
import { clientInfoType } from "./PersonDataTypes";
import { store } from "../redux/store";

export const PersonDataAPI = {
  getClientInfo: async (token: string): Promise<clientInfoType> => {
    const { data } = await instance.get<clientInfoType>("personal/client-info", {
      headers: {
        'X-Token': token
      }
    });
    return data;
  }
};