import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginIsLoading selector test', () => {
  it('should return password state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123',
      },
    }

    expect(getLoginPassword(state as StateSchema)).toEqual('123')
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginPassword(state as StateSchema)).toEqual('')
  })
})
