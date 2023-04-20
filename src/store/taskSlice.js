import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    clearTasks: (state) => {
      state.taskList = [];
    },
    removeTask: (state, { payload }) => {
      const updatedTaskList = state.taskList.filter(
        (item) => item.id !== payload
      );
      state.taskList = updatedTaskList;
    },
    addTask: (state, { payload }) => {
      const newItem = payload;
      if (!state.taskList.map((item) => item.id).includes(payload.id)) {
        state.taskList.push({
          id: newItem.id,
          title: newItem.title,
          description: newItem.description,
          subtask: newItem.subtask,
          status: newItem.status,
        });
      }
    },
  },
});

export const { clearTasks, removeTask, addTask } = taskSlice.actions;
export default taskSlice.reducer;
