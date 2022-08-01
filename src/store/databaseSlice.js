import { createSlice } from "@reduxjs/toolkit";

export const databaseSlice = createSlice({
  name: "database",
  initialState: {
    database: JSON.parse(localStorage.getItem("database")) || {
      counter: 1,
      machineTypeList: {},
    },
  },
  reducers: {
    addNewMachineType: (state, data) => {
      const thisCounter = state.database.counter;
      const newKey = `objectID${thisCounter}`;
      const newList = {
        ...state.database.machineTypeList,
        [newKey]: data.payload,
      };

      const newDatabase = {
        counter: thisCounter + 1,
        machineTypeList: newList,
      };
      state.database = newDatabase;
    },

    editMachineNameType: (state, data) => {
      const { name, objectID } = data.payload;
      console.log(name, objectID);
      state.database.machineTypeList[objectID].name = name;
    },
    updateMachineType: (state, data) => {
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

export const {
  addNewMachineType,
  deleteMachineType,
  updateMachineType,
  editMachineNameType,
} = databaseSlice.actions;

export const machineTypeList = (state) =>
  state.database.database.machineTypeList;
export const database = (state) => state.database.database;

export default databaseSlice.reducer;
