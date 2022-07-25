import { configureStore } from "@reduxjs/toolkit";
import machineTypeReducer from "./machineTypeSlice";

export default configureStore({
  reducer: {
    machineType: machineTypeReducer,
  },
});
