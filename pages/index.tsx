import React from 'react'
import Head from 'next/head'
import { CSVAdd } from '../components/CSVAdd'
import { Chart } from '../components/Chart'
import { Row } from '../types'
import { format } from 'date-fns'

export default function Home() {
  const [rows, setRows] = React.useState<Array<Row>>([])
  function handleCSVChange(rows: Array<Row>) {
    setRows(rows)
  }
  return (
    <div className="container">
      <Head>
        <title>Cashflow</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/base.css" />
      </Head>

      <main>
        <h1>Welcome</h1>
        <CSVAdd onChange={handleCSVChange} />
        {rows.length > 0 && <Chart data={rows} />}
        <table>
          <tbody>
            {rows.map((r) => (
              <tr>
                <td>{format(r[0], 'P')}</td>
                <td>{r[1]}</td>
                <td>{r[2]}</td>
                <td>{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  )
}
