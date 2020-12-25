import { configureStore, ThunkAction, Action, MiddlewareArray  } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: new MiddlewareArray().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
