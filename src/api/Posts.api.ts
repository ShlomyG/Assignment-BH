import {Api} from '../constants/strings.ts';
import axios from '../utils/NetworkManager.ts';
import {IPost} from '../features/homepage/models/postsModel.ts';

export const getPostsDataByUserId = async (
  userId: number,
): Promise<IPost[]> => {
  const url = `/${Api.POSTS}?userId=${userId}`;
  const res = await axios.get<IPost[]>(url);
  return res.data;
};
