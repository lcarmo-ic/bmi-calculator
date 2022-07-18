import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import bmiReducer from "./slices/bmiSlice";

const persistConfig = {
    key: 'persistedBmi',
    storage
}

const persistedReducer = persistReducer(persistConfig, bmiReducer)

export const store =  configureStore({
    reducer: {
        bmi: persistedReducer
    }
});
export const persistor = persistStore(store)