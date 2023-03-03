import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'

import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'
import { ReducerManager, StateSchema } from './StateSchema'

export function createReduxStore(initialState?: StateSchema, initialAsyncReducers?: ReducersMapObject<StateSchema>) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...initialAsyncReducers,
    counter: counterReducer,
    user: userReducer,
  }
  const reducerManager: ReducerManager = createReducerManager(rootReducer)

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })

  // @ts-ignore next-line
  store.reducerManager = reducerManager
  return store
}
