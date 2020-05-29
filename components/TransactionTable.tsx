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
  function handleInternalTransfer(id: string, checked: boolean) {
    const index = rows.findIndex((r) => r.id === id)
    if (index === -1) {
      throw new Error('Index not found when updating internal transfer')
    }
    const newRows = [...rows]
    newRows[index].internal = checked
    setRows(newRows)
  }

  return (
    <table>
      <tbody>
        {filteredRows.map((r) => (
          <tr key={r.id}>
            <td>{format(r.date, 'P')}</td>
            <td>{r.description}</td>
            <td>{r.category}</td>
            <td>{r.amount}</td>
            <td>
              <input
                type="checkbox"
                checked={r.internal}
                onChange={(event) => handleInternalTransfer(r.id, event.target.checked)}
                name="internal-transfer"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
