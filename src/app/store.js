import { configureStore } from '@reduxjs/toolkit'
import filterReducer from '../features/FilterSlice'
import jobReducer from '../features/JobSlice'

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    jobs: jobReducer,
  },
  devTools: true,
})
