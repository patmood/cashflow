import { ChangeEvent } from 'react'

export function CSVAdd({ onChange }: { onChange: (rows: Array<Array<any>>) => void }) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader()
    reader.onload = function (ev: ProgressEvent<FileReader>) {
      const { result } = ev.target
      if (typeof result !== 'string') {
        throw new Error('CSV did not produce string')
      }
      const rows = result.split('\n').map((r) => r.split(','))
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
