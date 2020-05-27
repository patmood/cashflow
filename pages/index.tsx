import React from 'react'
import Head from 'next/head'
import { CSVAdd } from '../components/CSVAdd'

export default function Home() {
  const [rows, setRows] = React.useState([[]])
  function handleCSVChange(rows: Array<Array<any>>) {
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
        <table>
          <tbody>
            {rows.map((r) => (
              <tr>
                {r.map((cell) => (
                  <td>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  )
}
