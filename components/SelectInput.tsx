import React from 'react'

export function SelectInput({
  handleChange,
  options,
  value,
}: {
  handleChange: (value: string | number) => void
  options: Array<{ label: string; value: string | number }>
  value: string | number
}) {
  return (
    <select onChange={(e) => handleChange(e.target.value)} defaultValue={value}>
      <option value=""></option>
      {options.map((opt, i) => (
        <option key={i} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  )
}
