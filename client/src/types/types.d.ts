export type Stack =
  | 'frontend'
  | 'backend'
  | 'fullstack'
  | 'mobile'
  | 'devops'
  | 'data'
export type Technology = 'react' | 'vue' | 'qwik' | 'angular' | 'svelte'

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
  created_at: string
  remote?: boolean
  is_active?: boolean
}

export type GraphColors =
  | 'slate'
  | 'violet'
  | 'indigo'
  | 'rose'
  | 'cyan'
  | 'amber'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'sky'
  | 'blue'
  | 'purple'
  | 'fuchsia'
  | 'pink'
