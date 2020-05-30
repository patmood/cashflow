import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { MonthSummary } from '../types'
import { format, parseISO } from 'date-fns'

type Props = {
  data: Record<string, MonthSummary>
}

export const Chart = ({ data }: Props) => {
  const chartData = Object.values(data)

  // TODO: add x ticks to see whats going on

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
      <XAxis
        dataKey="month"
        tickFormatter={(value) => value && format(parseISO(value), 'MMM yy')}
      />
      <YAxis />
      <Tooltip
        // content={CustomTooltip}
        labelFormatter={(label: string) => label && format(parseISO(label), 'MMMM yyyy')}
        formatter={(value, name, props) => {
          if (typeof value === 'number') {
            value = Math.round(value)
          }
          return [value, name]
        }}
      />
      <Legend />
      <Bar dataKey="income" name="Income" fill="var(--color-secondary)" stackId="a" />
      <Bar
        dataKey="oneOffIncome"
        name="One Off Income"
        fill="var(--color-secondary-accent)"
        stackId="a"
      />
      <Bar dataKey="expenses" name="Expenses" fill="var(--color)" stackId="a" />
      <Bar
        dataKey="oneOffExpenses"
        name="One Off Expenses"
        fill="var(--color-accent)"
        stackId="a"
      />
    </BarChart>
  )
}

// Not used currently
// Required to do more customized tool tips (eg styling and skipping 0 values)
// const CustomTooltip = ({
//   active,
//   payload,
//   label,
// }: {
//   active: boolean
//   payload: any
//   label: any
// }) => {
//   if (!active || !payload) return null
//   const xLabel = format(parseISO(payload[0].payload.month), 'MMMM yyyy')
//   console.log({ payload })
//   return (
//     <div className="ToolTip">
//       <div>{xLabel}</div>
//       {payload.map((series) => {
//         if (!series.value) return null
//         return (
//           <div>
//             {series.name}: {Math.round(series.value)}
//           </div>
//         )
//       })}
//       <style jsx>{`
//         .ToolTip {
//           background-color: var(--color-bg);
//           padding: 1rem;
//           border-radius: 3px;
//         }
//       `}</style>
//     </div>
//   )
// }
