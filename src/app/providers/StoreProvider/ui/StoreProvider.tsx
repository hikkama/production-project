import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'

import { StateSchema } from '../config/StateSchema'
import { createReduxStore } from '../config/store'

interface StoreProviderProps {
	children?: ReactNode
	initialState?: DeepPartial<StateSchema>
	initialAsyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props: StoreProviderProps) => {
  const {
    children,
    initialState,
    initialAsyncReducers,
  } = props

  const store = createReduxStore(initialState as StateSchema, initialAsyncReducers as ReducersMapObject<StateSchema>)

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
