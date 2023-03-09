import { Story } from '@storybook/react'

import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { profileReducer } from 'entities/Profile'
import { loginReducer } from 'features/authByUsername'
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const initialAsyncReducers: ReducersList = { loginForm: loginReducer, profile: profileReducer }

const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (Story: Story) => (
  <StoreProvider initialState={state} initialAsyncReducers={{ ...initialAsyncReducers, ...asyncReducers }}>
    <Story />
  </StoreProvider>
)

export { StoreDecorator }
