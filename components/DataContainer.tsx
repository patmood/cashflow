import React from 'react'
import { formatISO, startOfMonth } from 'date-fns'

import { AddCSV } from './AddCSV'
import { Chart } from './Chart'
import { Row, TXFilter, MonthSummary } from '../types'
import { TransactionTable } from './TransactionTable'
import { TransactionFilter } from './TransactionFilter'
import { Stats } from './Stats'
import { AddDemoData } from './AddDemoData'

export function DataContainer() {
  const [rows, setRows] = React.useState<Array<Row>>([])
  const [filter, setFilter] = React.useState<TXFilter>(TXFilter.NONE)

  const filteredRows = React.useMemo(
    () =>
      rows.filter((r) => {
        switch (filter) {
          case TXFilter.INCOME:
            return r.amount > 0
          case TXFilter.EXPENSES:
            return r.amount < 0
          default:
            return true
        }
      }),
    [rows, filter]
  )

  const monthlyData = React.useMemo(
    () =>
      filteredRows.reduce((memo, curr) => {
        // Ignore internal transfers
        if (curr.internal) return memo
        const month = formatISO(startOfMonth(curr.date))
        const { amount, oneOff } = curr
        const bucket = memo[month] || {
          month,
          net: 0,
          income: 0,
          expenses: 0,
          oneOffExpenses: 0,
          oneOffIncome: 0,
        }
        bucket.net += amount
        if (amount < 0) {
          if (oneOff) {
            bucket.oneOffExpenses += amount
          } else {
            bucket.expenses += amount
          }
        } else {
          if (oneOff) {
            bucket.oneOffIncome += amount
          } else {
            bucket.income += amount
          }
        }

        memo[month] = bucket
        return memo
      }, {} as Record<string, MonthSummary>),
    [filteredRows]
  )

  console.log({ monthlyData })

  return (
    <main>
      <h1>Welcome</h1>
      <AddCSV onChange={setRows} />
      <AddDemoData onChange={setRows} />
      <TransactionFilter filter={filter} setFilter={setFilter} />
      <Stats monthlyData={monthlyData} />
      {monthlyData && <Chart data={monthlyData} />}
      <TransactionTable rows={rows} filteredRows={filteredRows} setRows={setRows} />
    </main>
  )
}
