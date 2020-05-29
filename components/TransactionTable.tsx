import { Row } from '../types'
import { format } from 'date-fns'

export function TransactionTable({ rows }: { rows: Array<Row> }) {
  return (
    <table>
      <tbody>
        {rows.map((r) => (
          <tr>
            <td>{format(r.date, 'P')}</td>
            <td>{r.description}</td>
            <td>{r.category}</td>
            <td>{r.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
