import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import data from '../data.json'
import { addFilter } from '../features/FilterSlice'
import { getJobs } from '../features/JobSlice'
import { useJobs } from '../hooks/useJobs'
import Job from './job'
export default function Jobs() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getJobs(data))
  }, [dispatch])

  const jobs = useJobs()

  const handleFilter = (filter) => {
    dispatch(addFilter(filter))
  }
  return (
    <div className='md:p-12 p-0'>
      {jobs.map((job) => (
        <Job key={job.id} jobs={job} handleFilter={handleFilter} />
      ))}
    </div>
  )
}
