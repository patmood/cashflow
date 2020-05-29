import React from 'react'
import Head from 'next/head'
import { formatISO, startOfMonth } from 'date-fns'

import { AddCSV } from '../components/AddCSV'
import { Chart } from '../components/Chart'
import { Row, TXFilter, MonthSummary } from '../types'
import { TransactionTable } from '../components/TransactionTable'
import { TransactionFilter } from '../components/TransactionFilter'
import { Stats } from '../components/Stats'
import { AddDemoData } from '../components/AddDemoData'

export default function Home() {
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
        const month = formatISO(startOfMonth(curr.date))
        const amount = curr.amount
        const bucket = memo[month] || { month, net: 0, income: 0, expenses: 0 }
        bucket.net += amount
        if (amount < 0) {
          bucket.expenses += amount
        } else {
          bucket.income += amount
        }

        memo[month] = bucket
        return memo
      }, {} as Record<string, MonthSummary>),
    [filteredRows]
  )

  return (
    <div className="container">
      <Head>
        <title>Cashflow</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/base.css" />
      </Head>

      <main>
        <h1>Welcome</h1>
        <AddCSV onChange={setRows} />
        <AddDemoData onChange={setRows} />
        <TransactionFilter filter={filter} setFilter={setFilter} />
        <Stats monthlyData={monthlyData} />
        {monthlyData && <Chart data={monthlyData} />}
        <TransactionTable rows={rows} filteredRows={filteredRows} setRows={setRows} />
      </main>
    </div>
  )
}
