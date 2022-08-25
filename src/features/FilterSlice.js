import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: '@@filter',
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload)
      }
    },
    clearFilter: () => [],
    removeFilter: (state, action) => {
      return state.filter((item) => item !== action.payload)
    },
  },
})

export const { addFilter, clearFilter, removeFilter } = filterSlice.actions
export default filterSlice.reducer
export const selectFilters = (state) => state.filters
