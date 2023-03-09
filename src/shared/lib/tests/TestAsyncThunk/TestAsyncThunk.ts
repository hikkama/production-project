import { AsyncThunkAction } from '@reduxjs/toolkit'
import axios, { AxiosStatic } from 'axios'

import { StateSchema } from 'app/providers/StoreProvider'

type ActionCreatorType<Returned, ThunkArg, RejectValue>
	= (arg: ThunkArg) => AsyncThunkAction<Returned, ThunkArg, {rejectValue: RejectValue}>

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

export class TestAsyncThunk<Returned, ThunkArg, RejectValue> {
  dispatch: jest.MockedFn<any>

  getState: () => StateSchema

  actionCreator: ActionCreatorType<Returned, ThunkArg, RejectValue>

  api: jest.Mocked<AxiosStatic>

  navigate: jest.MockedFn<any>

  constructor(actionCreator: ActionCreatorType<Returned, ThunkArg, RejectValue>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()

    this.api = mockedAxios
    this.navigate = jest.fn()
  }

  async callThunk(arg: ThunkArg) {
    const action = this.actionCreator(arg)
    const result = await action(this.dispatch, this.getState, { api: this.api, navigate: this.navigate })

    return result
  }
}
