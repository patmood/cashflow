import { ChangeEvent } from 'react'
import { Row } from '../types'

export function CSVAdd({ onChange }: { onChange: (rows: Array<Row>) => void }) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader()
    reader.onload = function (ev: ProgressEvent<FileReader>) {
      const { result } = ev.target
      if (typeof result !== 'string') {
        throw new Error('CSV did not produce string')
      }
      const rows = result
        .trim()
        .split('\n')
        .map((r) => r.split(','))
        .map((r) => ({
          date: new Date(r[0]),
          description: r[2],
          category: r[3],
          amount: parseFloat(r[5]),
        }))
        // Remove headers
        .slice(1)
      onChange(rows)
    }
    reader.readAsText(event.target.files[0])
  }
  return (
    <label>
      <div>Add CSV</div>
      <input type="file" onChange={handleChange} />
    </label>
  )
}
