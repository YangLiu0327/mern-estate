import { combineReducers, configureStore } from '@reduxjs/toolkit'
import useReducer  from './user/userSlice.tsx'
import {persistStore, persistReducer, PersistConfig} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export interface RootState {
  user: ReturnType<typeof useReducer>
}
const rootReducer = combineReducers({user: useReducer});

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage,
  version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);