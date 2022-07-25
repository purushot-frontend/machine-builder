import { createSlice } from "@reduxjs/toolkit";

export const machineSlice = createSlice({
  name: "machine",
  initialState: {
    list: JSON.parse(localStorage.getItem("machineList")) || [],
  },
  reducers: {
    addNewMachine: (state, data) => {
      let newList = state.list.map((element, index) => {
        return { ...element, id: index + 1 };
      });
      newList = [...newList, { ...data.payload, id: state.list.length + 1 }];
      localStorage.setItem("machineList", JSON.stringify(newList));
      state.list = newList;
    },
    updateMachine: (state, data2) => {
      const { data, id } = data2.payload;

      const newList = state.list.map((element, index) => {
        return element.id == id ? data : element;
      });
      localStorage.setItem("machineList", JSON.stringify(newList));
      state.list = newList;
    },
    deleteMachine: (state, data) => {
      const newList = state.list.filter(
        (item, index) => item.id !== data.payload.id
      );
      localStorage.setItem("machineList", JSON.stringify(newList));
      state.list = newList;
    },
    deleteMachineByType: (state, data) => {
      const machineType = data.payload.name;
      const newList = state.list.filter(
        (item, index) => item.machineType !== machineType
      );
      localStorage.setItem("machineList", JSON.stringify(newList));
      state.list = newList;
    },
    updateMachineByType: (state, data) => {
      const thisData = data.payload.machineTypeObj;
      const machineType = thisData.name;
      const blueprintFields = thisData.fields;
      const blueprintFieldsArr = blueprintFields.map((element) => element.name);

      const blueprintMainField = thisData.mainField;

      let currentList = state.list.filter(
        (item, index) => item.machineType == machineType
      );

      let newList = [];
      currentList.forEach((element) => {
        let mainField = element.mainField;
        let fields = element.fields;

        //create new Object for each element/machine
        let newObject = {
          machineType: machineType,
          mainField: blueprintMainField,
        };

        //1. remove fields no longer in blueprint fields
        fields = fields.filter(
          (element) => blueprintFieldsArr.includes(element.name) == true
        );

        let fieldsArr = fields.map((element) => element.name);

        //2. add new fields from blueprint fields
        blueprintFields.forEach((element) => {
          if (!fieldsArr.includes(element.name)) {
            fields.push({ ...element, value: "" });
          }
        });

        //3. reset value to empty if field type is changed
        fields.forEach((element, index) => {
          let blueprintElement = blueprintFields.find(
            (el) => el.name == element.name
          );
          if (blueprintElement.type != element.type) {
            fields[index].type = blueprintElement.type;
            fields[index].value = "";
          }
        });

        newObject.fields = fields;
        newList.push(newObject);
      });

      localStorage.setItem("machineList", JSON.stringify(newList));
      state.list = newList;
    },
  },
});

export const {
  addNewMachine,
  deleteMachine,
  updateMachine,
  deleteMachineByType,
  updateMachineByType,
} = machineSlice.actions;

export const machineList = (state) => state.machine.list;

export default machineSlice.reducer;
