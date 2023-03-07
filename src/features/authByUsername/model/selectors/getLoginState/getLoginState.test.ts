import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginState } from './getLoginState'

describe('getLoginState selector test', () => {
  it('should return loginForm state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'admin',
        isLoading: false,
        password: '123',
      },
    }

    const expectedState = {
      username: 'admin',
      isLoading: false,
      password: '123',
    }

    expect(getLoginState(state as StateSchema)).toEqual(expectedState)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginState(state as StateSchema)).toBeUndefined()
  })
})
