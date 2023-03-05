import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginError } from './getLoginError'

describe('getLoginError selector test', () => {
  it('should return error state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: '403',
      },
    }

    expect(getLoginError(state as StateSchema)).toEqual('403')
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getLoginError(state as StateSchema)).toEqual('')
  })
})
