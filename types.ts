export type Row = {
  accountName: string
  id: string
  date: Date
  description: string
  category: string
  amount: number
  internal?: boolean
  oneOff?: boolean
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
  oneOffExpenses: number
  oneOffIncome: number
}
