import { Job, Stack } from '@/types/types'

export function getAllStacks(jobs: Job[]) {
  const stacks = new Set(jobs.map((job) => job.stack))
  return Array.from(stacks)
}

export function filterJobsByStack(jobs: Job[], stack: Stack) {
  return jobs.filter((job) => job.stack === stack)
}
