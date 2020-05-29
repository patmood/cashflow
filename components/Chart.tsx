import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { format } from 'date-fns'
import round from 'lodash/round'
import { Row } from '../types'

type Props = {
  data: Array<Row>
}

type ChartPoint = {
  date: string
  net: number
  income: number
  expenses: number
}

export const Chart = ({ data }: Props) => {
  const groupedData = data.reduce((memo, curr) => {
    const date = format(curr.date, 'yyyy-MM')
    const amount = curr.amount
    const bucket = memo.get(date) || { date, net: 0, income: 0, expenses: 0 }
    bucket.net += amount
    if (amount < 0) {
      bucket.expenses += amount
    } else {
      bucket.income += amount
    }

    memo.set(date, bucket)
    return memo
  }, new Map<string, ChartPoint>())

  const chartData = [...groupedData.values()]

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
            value = round(value)
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
