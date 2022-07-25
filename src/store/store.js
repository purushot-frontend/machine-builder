import { configureStore } from "@reduxjs/toolkit";
import machineTypeReducer from "./machineTypeSlice";
import machineReducer from "./machineSlice";
export default configureStore({
  reducer: {
    machineType: machineTypeReducer,
    machine: machineReducer,
  },
});
