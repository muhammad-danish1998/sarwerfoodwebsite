import rootReducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';

export const STORE = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof STORE.getState>;
export type AppDispatch = typeof STORE.dispatch;