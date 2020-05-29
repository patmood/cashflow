import { MonthSummary } from '../types'
import React from 'react'
import { differenceInMonths, parseISO } from 'date-fns'

export function Stats({ monthlyData }: { monthlyData: Record<string, MonthSummary> }) {
  const months = Object.keys(monthlyData).sort()
  const numMonths = differenceInMonths(parseISO(months[months.length - 1]), parseISO(months[0]))
  const sum = Object.values(monthlyData).reduce((memo, curr) => memo + curr.net, 0)
  const average = Math.round(sum / numMonths)
  return <div>Monthly Average: {average}</div>
}
