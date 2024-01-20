import {Api} from '../constants/strings.ts';
import axios from '../utils/NetworkManager.ts';
import {IUser} from '../features/homepage/models/usersModel.ts';

export const getUsersDataApi = async (): Promise<IUser[]> => {
  const url = `/${Api.USERS}`;
  const res = await axios.get<IUser[]>(url);
  return res.data;
};
