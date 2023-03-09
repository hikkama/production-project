import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { loginByUsername } from './loginByUsername'

describe('loginByUsername asyncThunk test', () => {
  it('should work properly with correct data', async () => {
    const expectedData = { id: '1', username: 'admin' }
    const thunk = new TestAsyncThunk(loginByUsername)

    thunk.api.post.mockResolvedValue({ data: expectedData })

    const result = await thunk.callThunk({ password: '123', username: '123' })

    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(expectedData)
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(expectedData))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
  })

  it('should handle error', async () => {
    const thunk = new TestAsyncThunk(loginByUsername)

    thunk.api.post.mockResolvedValue({ status: 403 })

    const result = await thunk.callThunk({ password: '123', username: '123' })

    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('error')
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
  })
})
