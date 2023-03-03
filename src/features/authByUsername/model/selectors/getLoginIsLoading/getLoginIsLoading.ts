import { createSelector } from '@reduxjs/toolkit'

import { getLoginState } from '../getLoginState/getLoginState'

export const getLoginIsLoading = createSelector(getLoginState, (loginState) => loginState?.isLoading || false)
