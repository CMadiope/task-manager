import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boardList: [],
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    removeBoard: (state, { payload }) => {
      const updatedBoardList = state.boardList.filter(
        (item) => item.id !== payload
      );
      state.boardList = updatedBoardList;
    },
    addBoard: (state, { payload }) => {
      const newItem = payload;
      if (!state.boardList.map((item) => item.id).includes(payload.id)) {
        state.boardList.push({
          id: newItem.id,
          title: newItem.title,
        });
      }
    },
  },
});

export const { addBoard, removeBoard } = boardSlice.actions;
export default boardSlice.reducer;
