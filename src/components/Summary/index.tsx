import { SummaryCard, SummaryContainer } from "./styles";
import {ArrowCircleUp, ArrowCircleDown, CurrencyDollar} from 'phosphor-react'
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { priceFormatter } from "../../utils/formatter";

export function Summary(){

  const {transactions} = useContext(TransactionsContext)

  const summry = transactions.reduce(
    (acc, trasaction) => {

      if(trasaction.type === 'income'){
        acc.income += trasaction.price
        acc.total += trasaction.price
      }else {
        acc.outcome += trasaction.price
        acc.total -= trasaction.price
      }

      return acc
    },
     {
      income: 0,
       outcome: 0,
        total: 0
      })

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color='#00b37e'/>
        </header>

        <strong>{priceFormatter.format(summry.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color='#f75a68'/>
        </header>

        <strong>{'- '}{priceFormatter.format(summry.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color='#fff'/>
        </header>

        <strong>{priceFormatter.format(summry.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}