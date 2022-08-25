import React from 'react'

export default function Job({ jobs, handleFilter }) {
  const {
    company,
    role,
    level,
    languages,
    logo,
    position,
    postedAt,
    contract,
    location,
    tools,
  } = jobs
  const tags = [role, level, ...languages, ...tools]
  return (
    <div
      className='relative flex flex-col sm:flex-row justify-between items-center sm:items-center sm:p-[30px] p-[15px] sm:gap-[20px] gap-[10px] bg-white w-full h-full rounded-[10px] my-8'
      style={{ boxShadow: '0px 4px 6px 4px rgba(51, 133, 115, 0.15)' }}>
      <div className='flex flex-row justify-center sm:justify-start items-start p-2 gap-3 sm:p-[10px] sm:gap-[10px] w-full h-full'>
        <img
          src={logo}
          alt={company}
          className='sm:h-[96px] h-[60px] sm:w-[96px] w-[60px]'
        />
        <div className=' relative flex flex-col justify-center p-2 gap-2 sm:p-[10px] sm:gap-[10px] w-full h-full '>
          <p className='font-normal text-sm md:text-base'>{company}</p>
          <p className='font-semibold text-lg md:text-xl'>{position}</p>
          <div className='relative flex flex-row items-start gap-2 sm:gap-[10px] p-0  h-full'>
            <p className='font-normal text-sm md:text-base text-[#AAA]'>
              {postedAt}
            </p>
            <p className='font-normal text-sm md:text-base text-[#AAA]'>
              {contract}
            </p>
            <p className='font-normal text-sm md:text-base text-[#AAA]'>
              {location}
            </p>
          </div>
        </div>
      </div>

      <div className='relative flex flex-wrap justify-evenly gap-[10px] sm:w-1/2 w-full'>
        {tags.map((tag, i) => (
          <span
            key={i}
            onClick={() => handleFilter(tag)}
            className='p-[8px] bg-[#BED8D2] rounded-[15px] cursor-pointer text-[#338573] text-center text-xs font-semibold '>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
