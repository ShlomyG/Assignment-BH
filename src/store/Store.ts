import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import HomeSlice from '../features/homepage/state/HomeSlice';
import ModalSlice from '../features/editPostModal/state/ModalSlice';

export const resetState = () => ({
  type: 'RESET_STATE',
});

const store = configureStore({
  reducer: {
    HomepageSlice: HomeSlice,
    EditPostModalSlice: ModalSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
