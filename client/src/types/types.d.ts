export type Technology = 'react' | 'vue' | 'qwik'

export type Job = {
  id: number
  title: string
  description: string
  company: string
  location: string
  stack: string
  technologies: Technology[] | string[]
  url: string
  salary?: string
  date?: string
  remote?: boolean
}
