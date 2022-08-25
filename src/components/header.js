import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearFilter,
  removeFilter,
  selectFilters,
} from '../features/FilterSlice'
import Remove from '../images/remove.svg'

export default function Header() {
  const dispatch = useDispatch()
  const currentTags = useSelector(selectFilters)

  return (
    <div className='w-full h-40 bg-blue-300 grid place-items-center'>
      <h1 className='font-semibold text-2xl text-center text-white '>
        Job List
      </h1>
      <div className='md:px-12 px-0 w-full'>
        <div className='bg-white shadow-md w-full h-full flex flex-row rounded-md justify-between items-center p-2'>
          <ul className='flex  flex-row'>
            {currentTags.map((tag) => (
              <li
                key={tag.id}
                className='text-[#338573] bg-[#BED8D2] font-semibold rounded-md mr-2 w-max h-max last:mr-0 flex flex-row tems-center justify-center'>
                <span className='px-2 py-1'>{tag}</span>
                <button
                  className='bg-[#338573] flex flex-row justify-center items-center rounded-tr-md rounded-br-md self-stretch w-full h-full p-2.5'
                  onClick={() => dispatch(removeFilter(tag))}>
                  <img src={Remove} alt={`remove ${tag} tag`} />
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => dispatch(clearFilter())}
            className='text-[#338573] font-semibold'>
            Clear
          </button>
        </div>
      </div>
    </div>
  )
}
