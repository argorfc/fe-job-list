import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import jobReducer from '../features/job/jobSlice';
import { jobApi } from '../services/job';

export const store = configureStore({
  reducer: {
    jobs: jobReducer,
    [jobApi.reducerPath]: jobApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jobApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
