import { Reducer } from '@reduxjs/toolkit'
import { FC, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

import { StateSchemaKeys } from 'app/providers/StoreProvider/config/StateSchema'
import { ReduxStoreWithManager } from 'app/providers/StoreProvider'

export type ReducersList = {
	[name in StateSchemaKeys]?: Reducer;
}

type ReducersListEntry = [StateSchemaKeys, Reducer]

interface DynamicModuleLoaderProps {
	reducers: ReducersList
	removeAfterUnmount: boolean
}

export const DynamicModuleLoader:FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount } = props

  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    Object.entries(reducers).forEach(([key, reducer]: ReducersListEntry) => {
      store.reducerManager.add(key, reducer)
      dispatch({ type: `@INIT ${key} reducer` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([key, reducer]: ReducersListEntry) => {
          store.reducerManager.remove('loginForm')
          dispatch({ type: `@DESTROY ${key} reducer` })
        })
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  )
}
