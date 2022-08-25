import { createSlice } from '@reduxjs/toolkit'

const jobSlice = createSlice({
  name: 'job',
  initialState: [],
  reducers: {
    getJobs: (state, action) => action.payload,
  },
})

export const { getJobs } = jobSlice.actions

export const selectFilteredJobs = (state, filters = []) => {
  if (filters.length === 0) return state.jobs

  return state.jobs.filter((job) => {
    const tags = [].concat(job.role, job.level, ...job.languages, ...job.tools)

    return filters.every((filter) => tags.includes(filter))
  })
}
export default jobSlice.reducer
