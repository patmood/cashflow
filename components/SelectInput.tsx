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
    <select onChange={(e) => handleChange(e.target.value)}>
      <option value="" selected={!value}></option>
      {options.map((opt, i) => (
        <option key={i} value={opt.value} selected={opt.value === value}>
          {opt.label}
        </option>
      ))}
    </select>
  )
}
