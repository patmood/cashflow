import React from 'react'
import Head from 'next/head'
import { CSVAdd } from '../components/CSVAdd'
import { Chart } from '../components/Chart'
import { Row, TXFilter } from '../types'
import { TransactionTable } from '../components/TransactionTable'
import { TransactionFilter } from '../components/TransactionFilter'

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

  console.log({ filter, filteredRows })

  return (
    <div className="container">
      <Head>
        <title>Cashflow</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/base.css" />
      </Head>

      <main>
        <h1>Welcome</h1>
        <CSVAdd onChange={setRows} />
        <TransactionFilter filter={filter} setFilter={setFilter} />
        {rows.length > 0 && <Chart data={filteredRows} />}
        <TransactionTable rows={filteredRows} />
      </main>
    </div>
  )
}
