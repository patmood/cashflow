import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { format, parse } from 'date-fns'
import groupBy from 'lodash/groupBy'
import { Row } from '../types'

type Props = {
  data: Array<Row>
}

export const Chart = ({ data }: Props) => {
  const groupedData = data.reduce((memo, curr) => {
    const key = format(curr[0], 'yyyy-MM')
    const existing = memo.get(key)
    memo.set(key, existing ? existing + curr[3] : curr[3])
    return memo
  }, new Map())

  const aggData = []
  for (let [key, value] of groupedData) {
    aggData.push({ x: key, y: Math.floor(value) })
  }

  return (
    <BarChart
      width={500}
      height={300}
      data={aggData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="x" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="y" name="Amount" fill="var(--color)" />
    </BarChart>
  )
}
