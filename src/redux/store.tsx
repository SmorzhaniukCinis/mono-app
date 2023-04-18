import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import { persistStore } from "redux-persist";


const configureAppStore = (initialState = {}):any => {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  const middleware = [sagaMiddleware];

  const store = configureStore({
    reducer: rootReducer,
    middleware: (gDM) => gDM({serializableCheck: false}).concat([...middleware]),
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
  });

  sagaMiddleware.run(rootSaga);
  return store;
};

export const store = configureAppStore();
export const persistor = persistStore(store)


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
