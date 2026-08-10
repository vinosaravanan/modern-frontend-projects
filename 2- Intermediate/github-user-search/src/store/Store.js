import {configureStore} from '@reduxjs/toolkit';
import { UserApi } from "../services/userApi";

export const store = configureStore({
    reducer:{
      [UserApi.reducerPath]: UserApi.reducer
    },
    middleware:(getDefaultMiddleware) => {
     return getDefaultMiddleware().concat(UserApi.middleware)
    }
})

