import { AsyncThunkAction } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'

type ActionCreatorType<Returned, ThunkArg, RejectValue>
	= (arg: ThunkArg) => AsyncThunkAction<Returned, ThunkArg, {rejectValue: RejectValue}>

export class TestAsyncThunk<Returned, ThunkArg, RejectValue> {
  dispatch: jest.MockedFn<any>

  getState: () => StateSchema

  actionCreator: ActionCreatorType<Returned, ThunkArg, RejectValue>

  constructor(actionCreator: ActionCreatorType<Returned, ThunkArg, RejectValue>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()
  }

  async callThunk(arg: ThunkArg) {
    const action = this.actionCreator(arg)
    const result = await action(this.dispatch, this.getState, undefined)

    return result
  }
}
