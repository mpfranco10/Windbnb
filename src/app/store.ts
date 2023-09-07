import {configureStore} from '@reduxjs/toolkit'
import staysReducer from '../features/stays/staysSlice'
import filterReducer from '../features/filter/filterSlice'

export const store = configureStore({
  reducer: {
    stays: staysReducer,
    filter: filterReducer
  }
})

export type AppDispatch = typeof store.dispatch
