import { configureStore } from "@reduxjs/toolkit";
import databaseReducer from "./databaseSlice";
//import machineReducer from "./machineSlice";
export default configureStore({
  reducer: {
    database: databaseReducer,
  },
});
