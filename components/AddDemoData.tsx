import { Row } from '../types'
import mockData from './demo_data.json'

export function AddDemoData({ onChange }: { onChange: (rows: Array<Row>) => void }) {
  function handleClick() {
    const mockDataWithDates: Array<Row> = mockData.map((tx) => ({ ...tx, date: new Date(tx.date) }))
    onChange(mockDataWithDates)
  }
  return <button onClick={handleClick}>Try demo data</button>
}
