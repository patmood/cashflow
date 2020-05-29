import { Row } from '../types'
import { format } from 'date-fns'

export function TransactionTable({ rows }: { rows: Array<Row> }) {
  return (
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
  )
}
