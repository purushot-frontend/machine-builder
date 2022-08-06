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
      state.database.machineTypeList[objectID].name = name;
    },
    deleteMachineType: (state, data) => {
      const { objectID } = data.payload;
      delete state.database.machineTypeList[objectID];
    },
    addField: (state, data) => {
      const { type, objectID } = data.payload;

      state.database.machineTypeList[objectID].fields[
        "objectID" + state.database.machineTypeList[objectID].fieldsCounter
      ] = { type, name: "" };
      state.database.machineTypeList[objectID].fieldsCounter += 1;
    },
    updateField: (state, data) => {
      const { name, fieldType, fieldId, machineTypeID } = data.payload;
      state.database.machineTypeList[machineTypeID].fields[fieldId] = {
        type: fieldType,
        name,
      };
    },
    deleteFieldType: (state, data) => {
      const { fieldId, machineTypeID } = data.payload;
      delete state.database.machineTypeList[machineTypeID].fields[fieldId];
    },
    updateMainField: (state, data) => {
      const { mainField, machineTypeID } = data.payload;
      state.database.machineTypeList[machineTypeID].mainField = mainField;
    },
  },
});

export const {
  addNewMachineType,
  editMachineNameType,
  addField,
  updateField,
  deleteMachineType,
  deleteFieldType,
  updateMainField,
} = databaseSlice.actions;

export const machineTypeList = (state) =>
  state.database.database.machineTypeList;
export const database = (state) => state.database.database;

export default databaseSlice.reducer;
