import { CounterSchema } from '../types/CounterSchema'
import { counterActions, counterReducer } from './counterSlice'

describe('counterSlice', () => {
  it('increment', () => {
    const state: CounterSchema = { value: 10 }
    expect(counterReducer(state as CounterSchema, counterActions.increment)).toEqual({ value: 11 })
  })

  it('decrement', () => {
    const state: CounterSchema = { value: 10 }
    expect(counterReducer(state as CounterSchema, counterActions.decrement)).toEqual({ value: 9 })
  })

  it('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.decrement)).toEqual({ value: -1 })
  })
})
