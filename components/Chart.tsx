import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { MonthSummary } from '../types'

type Props = {
  data: Record<string, MonthSummary>
}

export const Chart = ({ data }: Props) => {
  const chartData = Object.values(data)

  return (
    <BarChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip
        formatter={(value, name, props) => {
          if (typeof value === 'number') {
            value = Math.round(value)
          }
          return [value, name]
        }}
      />
      <Legend />
      <Bar dataKey="income" name="Income" fill="var(--color-secondary)" stackId="a" />
      <Bar dataKey="expenses" name="Expenses" fill="var(--color)" stackId="a" />
    </BarChart>
  )
}
