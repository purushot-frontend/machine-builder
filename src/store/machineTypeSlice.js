import { createSlice } from "@reduxjs/toolkit";

export const machineTypeSlice = createSlice({
  name: "machineType",
  initialState: {
    list: JSON.parse(localStorage.getItem("machineTypeList")) || [],
  },
  reducers: {
    addNewMachineType: (state, data) => {
      const newList = [...state.list, data.payload];
      localStorage.setItem("machineTypeList", JSON.stringify(newList));
      state.list = newList;
    },
    updateMachineType: (state, data) => {
      localStorage.setItem("machineTypeList", JSON.stringify(state.list));
      console.log(data.payload.index, "why");
      const newList = state.list.map((element, index) => {
        return index == data.payload.index
          ? data.payload.machineTypeObj
          : element;
      });
      localStorage.setItem("machineTypeList", JSON.stringify(newList));
      state.list = newList;
    },
    deleteMachineType: (state, data) => {
      const newList = state.list.filter(
        (item, index) => index !== data.payload.key
      );
      localStorage.setItem("machineTypeList", JSON.stringify(newList));
      state.list = newList;
    },
  },
});

export const { addNewMachineType, deleteMachineType, updateMachineType } =
  machineTypeSlice.actions;

export const machineTypeList = (state) => state.machineType.list;

export default machineTypeSlice.reducer;
