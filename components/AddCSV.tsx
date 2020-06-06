import React from 'react'
import { ChangeEvent } from 'react'
import { Modal } from './Modal'
import { ParseCSV } from './ParseCSV'
import { Row } from '../types'

export function AddCSV({ onChange }: { onChange: (rows: Array<Row>) => void }) {
  const [file, setFile] = React.useState<File | null>(null)
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFile(event.target.files[0])
  }

  function handleParsedResult(rows: Array<Row>) {
    onChange(rows)
    setFile(null)
  }

  return (
    <label>
      <div>Import CSV</div>
      <input type="file" onChange={handleChange} accept=".csv" />
      {file && (
        <Modal title="Import CSV" onClose={() => setFile(null)}>
          <ParseCSV file={file} setResult={handleParsedResult} />
        </Modal>
      )}
    </label>
  )
}
