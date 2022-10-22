import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { DescriptionComponent, PriceHighlight, TransactionContainer, TransactionTable } from "./styles";

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  created_at: string;
}

export function Transactions() {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransactions() {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json()
    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])


  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />

        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <DescriptionComponent>{transaction.description}</DescriptionComponent>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.created_at}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionTable>

      </TransactionContainer>
    </div>
  )
}