import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '../models/usersModel';
import {getPostsForUserAction, getUsersDataAction} from './HomeAction';
import {IPost} from '../models/postsModel';

interface HomeScreenState {
  usersData: IUser[];
  postsCache: Record<number, IPost[]>;
  currentUserId: number;
  currentPostIndex: number;
  isLoading: boolean;
}

const initialState: HomeScreenState = {
  usersData: [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    },
  ],
  postsCache: {},
  currentUserId: -1,
  currentPostIndex: -1,
  isLoading: false,
};

const HomeSlice = createSlice({
  name: 'HomepageSlice',
  initialState,
  reducers: {
    setUsersData(state, action: PayloadAction<IUser[]>) {
      state.usersData = action.payload;
    },
    setCurrentPostIndex(state, action: PayloadAction<number>) {
      state.currentPostIndex = action.payload;
    },
    setDeleteUser(state, action: PayloadAction<number>) {
      state.usersData = state.usersData.filter(
        user => user.id !== action.payload,
      );
      delete state.postsCache[action.payload];
    },
    setDeletePostById(state, action: PayloadAction<number>) {
      const currentUserPosts = state.postsCache[state.currentUserId];
      if (currentUserPosts) {
        // Remove post from state.postsCache[state.currentUserId]
        state.postsCache[state.currentUserId] = currentUserPosts.filter(
          post => post.id !== action.payload,
        );
      }
    },
    setEditPost(state, action: PayloadAction<IPost>) {
      const currentPostIndex = state.currentPostIndex;
      state.postsCache[state.currentUserId][currentPostIndex] = action.payload;
    },
    resetHomeState: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(getUsersDataAction.fulfilled, (state, action) => {
      state.usersData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getUsersDataAction.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getUsersDataAction.rejected, state => {
      console.log('error get Users data');
      state.isLoading = false;
    });
    builder.addCase(getPostsForUserAction.fulfilled, (state, action) => {
      const userId = action.payload[0]?.userId || -1;
      state.postsCache[userId] = action.payload;
      state.currentUserId = userId as number;
      state.isLoading = false;
    });
    builder.addCase(getPostsForUserAction.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getPostsForUserAction.rejected, state => {
      console.log('error get posts data');
      state.isLoading = false;
    });
  },
});

export const {
  resetHomeState,
  setUsersData,
  setDeleteUser,
  setDeletePostById,
  setCurrentPostIndex,
  setEditPost,
} = HomeSlice.actions;
export default HomeSlice.reducer;
