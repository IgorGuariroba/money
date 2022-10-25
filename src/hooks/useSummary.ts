import { TransactionsContext } from './../contexts/TransactionsContext'
import { useContext } from 'react'

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  return transactions.reduce(
    (acc, trasaction) => {
      if (trasaction.type === 'income') {
        acc.income += trasaction.price
        acc.total += trasaction.price
      } else {
        acc.outcome += trasaction.price
        acc.total -= trasaction.price
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )
}
