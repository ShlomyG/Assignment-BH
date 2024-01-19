import {AsyncThunk, createAsyncThunk} from '@reduxjs/toolkit';
import {getUsersDataApi} from '../../../api/Users.api';
import {IUser} from '../models/usersModel';
import {IPost} from '../models/postsModel';
import {getPostsDataByUserId} from '../../../api/Posts.api';
import {RootState} from '../../../store/Store';

export const getUsersDataAction = createAsyncThunk<IUser[]>(
  '/getUsersData',
  async (_, {rejectWithValue}) => {
    try {
      const response = await getUsersDataApi();
      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

export const getPostsForUserAction: AsyncThunk<
  IPost[],
  number,
  {rejectValue: unknown}
> = createAsyncThunk(
  '/getPostsForUser',
  async (userId, {rejectWithValue, getState}) => {
    const state: RootState = getState() as RootState; // Explicitly type the state
    const cachedPosts = state.HomepageSlice.postsCache[userId] || [];

    // Check if posts are already available in the state
    if (cachedPosts.length > 0) {
      console.log('Using cached posts:');
      return cachedPosts;
    }

    try {
      const response = await getPostsDataByUserId(userId);
      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);
