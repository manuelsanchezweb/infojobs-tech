'use client'

import { Card, Title, AreaChart } from '@tremor/react'

const chartdata = [
  {
    date: 'Enero 23',
    React: 3892,
    Vue: 2318,
    Angular: 1756,
    Qwik: 1203,
  },
  {
    date: 'Febrero 23',
    React: 3789,
    Vue: 2810,
    Angular: 1789,
    Qwik: 2019,
  },
  {
    date: 'Marzo 23',
    React: 3922,
    Vue: 1256,
    Angular: 1989,
    Qwik: 1876,
  },
  {
    date: 'Abril 23',
    React: 4000,
    Vue: 2156,
    Angular: 1210,
    Qwik: 2609,
  },
  {
    date: 'Mayo 23',
    React: 3967,
    Vue: 2378,
    Angular: 356,
    Qwik: 3500,
  },
]

const dataFormatter = (number: number) => {
  return Intl.NumberFormat('us').format(number).toString()
}

export const ChartMonthTech = () => (
  <Card>
    <Title>Número de ofertas de trabajo por tecnología frontend</Title>
    <AreaChart
      className="h-72 mt-4"
      data={chartdata}
      index="date"
      categories={['React', 'Qwik', 'Angular', 'Vue']}
      colors={['blue', 'purple', 'red', 'green']}
      valueFormatter={dataFormatter}
    />
  </Card>
)
