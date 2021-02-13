import { ChangeEvent } from 'react'
import { Row } from '../types'
import { format } from 'date-fns'

export function TransactionTable({
  rows,
  filteredRows,
  setRows,
}: {
  rows: Array<Row>
  filteredRows: Array<Row>
  setRows: (rows: Array<Row>) => void
}) {
  function handleUpdate(row: Row, update: { internal?: boolean; oneOff?: boolean }) {
    const index = rows.findIndex((r) => r.id === row.id)
    const newRows = [...rows]
    newRows[index] = { ...newRows[index], ...update }
    setRows(newRows)
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Account</th>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Internal Transfer</th>
          <th>One Off</th>
        </tr>
      </thead>
      <tbody>
        {filteredRows.map((r) => (
          <tr key={r.id}>
            <td>{r.accountName}</td>
            <td>{format(r.date, 'P')}</td>
            <td>{r.description}</td>
            <td>{r.category}</td>
            <td>{r.amount}</td>
            <td>
              <input
                type="checkbox"
                checked={!!r.internal}
                onChange={(event) => handleUpdate(r, { internal: event.target.checked })}
                name="internal-transfer"
              />
            </td>
            <td>
              <input
                type="checkbox"
                checked={!!r.oneOff}
                onChange={(event) => handleUpdate(r, { oneOff: event.target.checked })}
                name="one-off"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
