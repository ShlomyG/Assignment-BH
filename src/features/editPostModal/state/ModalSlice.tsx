import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IPostEditDetails} from '../models/editModalModels';

interface ModalSliceState {
  modalVisible: boolean;
  expenseModalDetails: IPostEditDetails;
}

const initialState: ModalSliceState = {
  modalVisible: false,
  expenseModalDetails: {
    id: undefined,
    title: '',
    body: undefined,
  },
};

const ExpenseSlice = createSlice({
  name: 'expenseSlice',
  initialState,
  reducers: {
    setModalVisible(state, action: PayloadAction<boolean>) {
      state.modalVisible = action.payload;
    },
    setPostDetails(state, action: PayloadAction<IPostEditDetails>) {
      state.expenseModalDetails = action.payload;
    },
    setExpenseTitle(state, action: PayloadAction<string>) {
      state.expenseModalDetails.title = action.payload;
    },
    resetModalState: () => initialState,
  },
});

export const {resetModalState, setModalVisible, setPostDetails} =
  ExpenseSlice.actions;
export default ExpenseSlice.reducer;
