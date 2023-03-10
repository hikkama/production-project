import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit'
import { NavigateOptions, To } from 'react-router'
import { AxiosInstance } from 'axios'

import { CounterSchema } from 'entities/Counter'
import { ProfileSchema } from 'entities/Profile'
import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/authByUsername'

export interface StateSchema {
	counter: CounterSchema
	user: UserSchema

	// Asynchronous reducers
	loginForm?: LoginSchema
	profile?: ProfileSchema
}

export type StateSchemaKeys = keyof StateSchema

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>,
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
	add: (key: StateSchemaKeys, reducer: Reducer) => void
	remove: (key: StateSchemaKeys) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance,
  navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
  rejectValue: T,
  extra: ThunkExtraArg
}
