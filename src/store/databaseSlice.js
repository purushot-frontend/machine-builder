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
    addField: (state, data) => {
      const { type, objectID } = data.payload;
      console.log(type, objectID);

      state.database.machineTypeList[objectID].fields[
        "objectID" + state.database.machineTypeList[objectID].fieldsCounter
      ] = { type, name: "" };
      state.database.machineTypeList[objectID].fieldsCounter += 1;
    },
  },
});

export const { addNewMachineType, editMachineNameType, addField } =
  databaseSlice.actions;

export const machineTypeList = (state) =>
  state.database.database.machineTypeList;
export const database = (state) => state.database.database;

export default databaseSlice.reducer;
