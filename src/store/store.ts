import {
  combineReducers,
  configureStore,
  ThunkAction,
  Action,
  PreloadedState,
} from '@reduxjs/toolkit';
import { appReducer } from '@/app';

const rootReducer = combineReducers({
  app: appReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export const store = setupStore();

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// import {
//   configureStore,
//   ThunkAction,
//   Action,
// } from '@reduxjs/toolkit';
// import { appReducer } from '@/app';

// export const store = configureStore({
//   reducer: {
//     app: appReducer,
//   },
// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
