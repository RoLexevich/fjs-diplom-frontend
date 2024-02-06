import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import hotelsReducer from "./hotelsSlice";

export default configureStore({
    reducer: {
        users: usersReducer,
        hotels: hotelsReducer,
    },
});
