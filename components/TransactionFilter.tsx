import { TXFilter } from '../types'
import React, { ChangeEvent } from 'react'

export function TransactionFilter({
  filter,
  setFilter,
}: {
  filter?: TXFilter
  setFilter: (filter: TXFilter) => void
}) {
  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    setFilter(event.target.value as TXFilter)
  }

  return (
    <label>
      Filter
      <select name="transaction-filter" onChange={handleChange} value={filter}>
        {Object.values(TXFilter).map((filter) => (
          <option key={filter} value={filter}>
            {filter}
          </option>
        ))}
      </select>
    </label>
  )
}
