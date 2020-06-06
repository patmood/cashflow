import React from 'react'
import { Row } from '../types'
import { v4 as uuid } from 'uuid'
import { SelectInput } from './SelectInput'

const AMOUNT_REG = /^(-?\$?(\d|\.|,)+)$/

const HEADERS_CHOICES = ['Date', 'Description', 'Category', 'Amount']
type HeaderLabels = 'Date' | 'Description' | 'Category' | 'Amount'

export function ParseCSV({
  file,
  setResult,
}: {
  file: File
  setResult: (rows: Array<Row>) => void
}) {
  const [rawRows, setRawRows] = React.useState<Array<Array<string>>>([])
  const [hasHeaders, setHasHeaders] = React.useState(false)
  const [columnIndexes, setColumnIndexes] = React.useState<Array<HeaderLabels>>([])

  // Parse the file
  React.useEffect(() => {
    const reader = new FileReader()
    reader.onload = function (ev: ProgressEvent<FileReader>) {
      const { result } = ev.target
      if (typeof result !== 'string') {
        throw new Error('CSV did not produce string')
      }
      const rows = result
        .trim()
        .split('\n')
        .map((r) => r.split(',').map((cell) => cell.trim()))
      setRawRows(rows)
    }
    reader.readAsText(file)
  }, [])

  // Best guess of headers and columns
  React.useEffect(() => {
    if (rawRows.length < 3) return
    const [firstRow, secondRow] = rawRows

    // Check for header row (assume header if no numbers)
    const foundNumber = firstRow.some((cell) => !Number.isNaN(parseFloat(cell)))
    setHasHeaders(!foundNumber)

    // Guess column indexes
    const newColumnIndexes = [...columnIndexes]
    // Find first valid date
    const dateIndex = secondRow.findIndex((cell) => {
      const d = new Date(cell)
      return d instanceof Date && !Number.isNaN(d.getTime())
    })
    newColumnIndexes[dateIndex] = 'Date'
    // Find first valid number
    const amountIndex = secondRow.findIndex((cell, i) => i !== dateIndex && AMOUNT_REG.test(cell))
    newColumnIndexes[amountIndex] = 'Amount'

    setColumnIndexes(newColumnIndexes)
  }, [rawRows])

  function handleImport() {
    const dateIndex = columnIndexes.indexOf('Date')
    const descIndex = columnIndexes.indexOf('Description')
    const catIndex = columnIndexes.indexOf('Category')
    const amountIndex = columnIndexes.indexOf('Amount')

    let rows = rawRows.map((r) => ({
      id: uuid(),
      date: new Date(r[dateIndex]),
      description: r[descIndex],
      category: r[catIndex],
      amount: parseFloat(r[amountIndex]),
    }))

    if (hasHeaders) {
      // Remove headers
      rows = rows.slice(1)
    }
    setResult(rows)
  }

  return (
    <div>
      <div>
        First row is headers?{' '}
        <input type="checkbox" checked={hasHeaders} onChange={() => setHasHeaders(!hasHeaders)} />
      </div>
      <button onClick={handleImport}>Import Data</button>
      <h3>Select column headers:</h3>
      <table>
        <thead>
          <tr>
            {rawRows[0] &&
              rawRows[0].map((_, i) => {
                const selectOptions = HEADERS_CHOICES.map((key) => ({
                  label: key,
                  value: key,
                }))
                return (
                  <th key={i}>
                    <SelectInput
                      options={selectOptions}
                      handleChange={(val: HeaderLabels) => {
                        const newColumnIndexes = [...columnIndexes]
                        const existingIndex = newColumnIndexes.indexOf(val)
                        if (existingIndex !== -1 && existingIndex !== i) {
                          delete newColumnIndexes[existingIndex]
                        }
                        newColumnIndexes[i] = val
                        setColumnIndexes(newColumnIndexes)
                      }}
                      value={columnIndexes[i]}
                    />
                  </th>
                )
              })}
          </tr>
        </thead>
        <tbody>
          {rawRows.slice(0, 7).map((row, i) => (
            <tr key={i}>
              {row.map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
