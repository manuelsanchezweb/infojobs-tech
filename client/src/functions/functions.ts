import { Job, Stack } from '@/types/types'

const monthNames = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
]

export function getAllStacks(jobs: Job[]) {
  const stacks = new Set(jobs.map((job) => job.stack))
  return Array.from(stacks)
}

export function filterJobsByStack(jobs: Job[], stack: Stack) {
  return jobs.filter((job) => job.stack === stack)
}

export function getTodayInSpanishFormat(): string {
  const date = new Date()
  const day = date.getDate().toString().padStart(2, '0')
  const month = monthNames[date.getMonth()]
  const year = date.getFullYear()

  return `${day} de ${month} de ${year}`
}

export function convertDateToStandardFormat(input: string): string {
  const date = new Date(input)
  const day = date.getUTCDate().toString().padStart(2, '0')
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0')
  const year = date.getUTCFullYear()

  return `${day}/${month}/${year}`
}

/**
 *
 * @param input Date in ISO format
 * @returns Formatted date or difference in hours/days
 */
export function formatDateOrComputeDifference(input: string): string {
  // Parse the input string as a Date object
  const inputDate = new Date(input)
  const currentDate = new Date()

  const difference = currentDate.getTime() - inputDate.getTime()

  const hoursDifference = difference / 1000 / 60 / 60
  if (hoursDifference < 0) return convertDateToStandardFormat(input)

  if (hoursDifference < 1) {
    return `Hace menos de ${Math.floor(hoursDifference)} hora`
  } else if (hoursDifference < 48) {
    return `Hace ${Math.floor(hoursDifference)} horas`
  } else if (hoursDifference < 168) {
    // less than 7 days
    return `Hace ${Math.floor(hoursDifference / 24)} días`
  } else {
    return convertDateToStandardFormat(input)
  }
}
