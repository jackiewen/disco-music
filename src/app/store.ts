import { configureStore, ThunkAction, Action, MiddlewareArray  } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import searchReducer from '@src/features/UI/Search/searchSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(thunk)
    .concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
