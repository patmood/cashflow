export type Row = {
  id: string
  date: Date
  description: string
  category: string
  amount: number
}

export enum TXFilter {
  NONE = 'None',
  INCOME = 'Income',
  EXPENSES = 'Expenses',
}

export type MonthSummary = {
  month: string
  net: number
  income: number
  expenses: number
}
