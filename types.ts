export type Row = {
  date: Date
  description: string
  category: string
  amount: number
}

export enum TXFilter {
  NONE = '',
  INCOME = 'Income',
  EXPENSES = 'Expenses',
}
