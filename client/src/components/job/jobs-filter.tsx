import { getAllStacks } from '@/functions/functions'
import { Job, Stack } from '@/types/types'
import React from 'react'

type JobsFilterProps = {
  jobs: Job[]
  selectedStack: Stack | null
  setSelectedStack: (stack: Stack | null) => void
}

const JobsFilter = ({
  jobs,
  selectedStack,
  setSelectedStack,
}: JobsFilterProps) => {
  const handleStackClick = (stack: Stack | null) => {
    setSelectedStack(stack)
  }

  return (
    <div className="flex flex-wrap gap-4 my-4 items-start w-full">
      <button
        onClick={() => handleStackClick(null)}
        className={`${
          selectedStack === null ? 'bg-primary text-white' : ''
        } py-2 px-4 rounded-md border border-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white`}
      >
        Todos
      </button>
      {getAllStacks(jobs).map((stack, index) => (
        <button
          className={`${
            selectedStack === stack ? 'bg-primary text-white' : ''
          } flex gap-2 py-2 px-4 rounded-md border border-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white`}
          key={index}
          onClick={() => handleStackClick(stack)}
        >
          {stack}
        </button>
      ))}
    </div>
  )
}

export default JobsFilter
