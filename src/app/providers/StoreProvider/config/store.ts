import {
  CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit'
import { NavigateOptions, To } from 'react-router'

import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { $api } from 'shared/api/api'
import { createReducerManager } from './reducerManager'
import { ReducerManager, StateSchema, ThunkExtraArg } from './StateSchema'

export function createReduxStore(
  initialState?: StateSchema,
  initialAsyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...initialAsyncReducers,
    counter: counterReducer,
    user: userReducer,
  }
  const reducerManager: ReducerManager = createReducerManager(rootReducer)

  const extraArg: ThunkExtraArg = {
    api: $api,
    navigate,
  }

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
    }),
  })

  // @ts-ignore next-line
  store.reducerManager = reducerManager
  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
