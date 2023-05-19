export type Stack =
  | 'frontend'
  | 'backend'
  | 'fullstack'
  | 'mobile'
  | 'devops'
  | 'data'
export type Technology = 'react' | 'vue' | 'qwik'

export type Job = {
  id: number
  id_infojobs: string
  title: string
  description: string
  company: string
  location: string
  stack: Stack
  technologies: Technology[] | string[]
  url: string
  min_salary?: string
  max_salary?: string
  created_at?: string
  remote?: boolean
}
