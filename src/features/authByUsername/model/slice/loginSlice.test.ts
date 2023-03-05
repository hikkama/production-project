import { DeepPartial } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/LoginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice', () => {
  it('setUsername', () => {
    const state: DeepPartial<LoginSchema> = { username: '' }
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('123'))).toEqual({ username: '123' })
  })

  it('setPassword', () => {
    const state: DeepPartial<LoginSchema> = { password: '' }
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('123'))).toEqual({ password: '123' })
  })
})
