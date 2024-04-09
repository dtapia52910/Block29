import { configureStore } from "@reduxjs/toolkit";
import { puppyBowlApi } from "./api/Api";


export default configureStore({
  reducer: {
    [puppyBowlApi.reducerPath]: puppyBowlApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(puppyBowlApi.middleware),
});
