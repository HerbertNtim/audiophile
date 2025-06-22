'use client'

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

// Create noop storage for SSR
const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

// Use appropriate storage based on environment
const storage = typeof window !== "undefined" 
  ? createWebStorage("local") 
  : createNoopStorage();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // only persist cart state
};

const rootReducer = combineReducers({
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/REGISTER',
          'persist/PURGE',
          'persist/FLUSH',
          'persist/PAUSE',
        ],
      },
    }),
});

export const persistor = persistStore(store);
