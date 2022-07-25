import { createSlice } from "@reduxjs/toolkit";

export const machineSlice = createSlice({
  name: "machine",
  initialState: {
    list: JSON.parse(localStorage.getItem("machineList")) || [],
  },
  reducers: {
    addNewMachine: (state, data) => {
      const newList = [...state.list, data.payload];
      localStorage.setItem("machineList", JSON.stringify(newList));
      state.list = newList;
    },
    updateMachine: (state, data) => {
      //
    },
    deleteMachine: (state, data) => {
      const newList = state.list.filter(
        (item, index) => index !== data.payload.key
      );
      localStorage.setItem("machineList", JSON.stringify(newList));
      state.list = newList;
    },
  },
});

export const { addNewMachine, deleteMachine, updateMachine } =
  machineSlice.actions;

export const machineList = (state) => state.machine.list;

export default machineSlice.reducer;
