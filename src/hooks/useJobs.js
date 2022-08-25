import { useSelector } from 'react-redux'
import { selectFilters } from '../features/FilterSlice'
import { selectFilteredJobs } from '../features/JobSlice'

export const useJobs = () => {
  const filteredTags = useSelector(selectFilters)
  const jobs = useSelector((state) => selectFilteredJobs(state, filteredTags))
  return jobs
}
