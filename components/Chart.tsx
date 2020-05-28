import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

type Props = {
  data: Array<Array<string>>
}

export const Chart = React.memo(({ data }: Props) => {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="0" scale="time" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="5" name="Amount" fill="#8884d8" />
    </BarChart>
  )
})
